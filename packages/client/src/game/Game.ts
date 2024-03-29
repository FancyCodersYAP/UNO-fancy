import {
  allCards,
  cardColors,
  FourPlayerLayers,
  TwoPlayerLayers,
  addPlayers,
  compareCardWithUpcard,
  shuffle,
  sleep,
  clearGamePage,
  countPoints,
} from 'game/utils';
import {
  BASE_HEIGHT_CARD,
  BASE_WIDTH_CARD,
  ANIMATION_TIME,
  START_NUM_CARDS_IN_HAND,
  startZindexForLayers,
} from 'game/utils/constants';
import {
  CardType,
  GameEvents,
  GamePlayerType,
  HandEntityTypes,
  PlayerClickPosition,
} from 'game/types';
import { HandEntity, TableEntity } from 'game/entities';
import { EventBus } from 'game/utils/EventBus';

export class Game extends EventBus {
  private activePlayerId = -1;
  private players: GamePlayerType[] = [];
  private handEntities: Record<string, HandEntity> = {};
  private table!: TableEntity;

  private clockwiseMovement = true;

  constructor() {
    super();
  }

  startGame(playersNum: number, playerData?: GamePlayerType) {
    /* Если есть данные, добавляем игрока с этими данными */
    if (playerData !== undefined) {
      this.players = addPlayers(playersNum, playerData);
    }

    /* Если ранее игроки были добавлены и количество игроков изменилось */
    /* Добавляем игроков заново с данными юзера, используемыми ранее */
    if (this.players.length !== playersNum) {
      this.players = addPlayers(playersNum, this.players[0]);
    }

    /* Если нет данных и игроков ранее не добавляли */
    /* Юзер не авторизован, добавляем его без данных */
    if (playerData === undefined && !this.players.length) {
      this.players = addPlayers(playersNum, { username: 'Игрок' });
    }
    /* Если игроки ранее были добавлены и в новой игре режим не поменялся, оставляем players */

    /* Перемешиваем массив карт. Это стартовая колода */
    const initialPack = shuffle([...allCards]);

    this.table = new TableEntity();
    this.table.start();

    /* Создаём "руки" игроков и раздаём карты */
    let zIndex = startZindexForLayers;
    for (let i = 0; i < playersNum; i++) {
      const entityName =
        playersNum === 2 ? TwoPlayerLayers[i] : FourPlayerLayers[i];
      this.handEntities[entityName] = new HandEntity(
        entityName as HandEntityTypes,
        this.players[i]
      );

      const cards = initialPack.splice(
        initialPack.length - 1 - START_NUM_CARDS_IN_HAND,
        START_NUM_CARDS_IN_HAND
      );
      this.handEntities[entityName].create(zIndex);
      this.handEntities[entityName].addCards(cards, () => {
        this.emit(GameEvents.CARD_MOVEMENT);
      });

      zIndex -= 1;
    }

    /* Из стартовой колоды берём одну карту для открытия */
    const lastCard = initialPack.pop();
    if (!lastCard) {
      throw new Error('Куда-то делись все карты');
    }
    /* Открываем карту после раздачи всех карт игрокам */
    setTimeout(() => {
      this.table.addUpcard(lastCard, () => {
        this.emit(GameEvents.CARD_MOVEMENT);
      });
    }, (ANIMATION_TIME / 2) * START_NUM_CARDS_IN_HAND);

    this.activePlayerId = 0;
    const activePlayer = this.getActivePlayer();
    if (!activePlayer) return;
    activePlayer.highlight();

    if (lastCard.action) {
      if (lastCard.action !== 'wild') {
        this.activePlayerId = this.players.length - 1;
      }
      if (lastCard.action === 'reverse' && this.players.length === 4) {
        this.activePlayerId = 1;
      }

      setTimeout(() => {
        this.checkCard(lastCard);
        if (lastCard.action !== 'wild') {
          this.moveLine();
        }
      }, (ANIMATION_TIME / 2) * (START_NUM_CARDS_IN_HAND + 1));
    }
    /* Оставшаяся часть карт будет в закрытой колоде */
    this.table.setClosePack(initialPack);
  }

  /* Проверяем, может ли в текущий момент игрок выполнить ход */
  checkPosiibilityOfAction() {
    return this.activePlayerId === 0;
  }

  /* Юзер берёт карту со стола */
  playerTakeCard(clickPos: PlayerClickPosition) {
    const playerLayer = this.handEntities['frontHand'];
    const playerCards = playerLayer.getCards();
    const { x: xClick, y: yClick } = clickPos;

    /* Если клик по слою стола был не на закрытой колоде, ничего не происходит */
    if (
      xClick <= 0 &&
      xClick >= BASE_WIDTH_CARD &&
      yClick <= 0 &&
      yClick >= BASE_HEIGHT_CARD
    ) {
      return;
    }

    /* Если есть карта, которую можно скинуть, то взять из закрытой колоды нельзя */
    for (const card of playerCards) {
      const isRelevantCard = compareCardWithUpcard(
        card,
        this.table.getUpcard(),
        this.table.getActiveColor()
      );

      if (isRelevantCard) {
        return;
      }
    }

    /* Если проверки пройдены, юзер берёт карту */
    this.takeCard(1);
  }

  /* Юзер сбрасывет карту с руки */
  playerDiscardCard(clickPos: PlayerClickPosition) {
    const playerLayer = this.handEntities['frontHand'];
    const playerCards = playerLayer.getCards();
    const { x: xClick, y: yClick } = clickPos;

    for (let i = playerCards.length - 1; i >= 0; i--) {
      const card = playerCards[i];

      /* Поиск карты, по которой был клик */
      if (
        xClick < card.x! ||
        xClick > card.x! + BASE_WIDTH_CARD ||
        yClick < card.y! ||
        yClick > card.y! + BASE_HEIGHT_CARD
      ) {
        continue;
      }

      /* Проверка, можно ли сбросить эту карту */
      const isRelevantCard = compareCardWithUpcard(
        card,
        this.table.getUpcard(),
        this.table.getActiveColor()
      );

      if (!isRelevantCard) {
        return;
      }

      this.discardCard(card);

      /* Завершаем цикл поиска карты */
      return;
    }
  }

  botMove() {
    const botLayer = this.getActivePlayer();
    if (!botLayer) return;

    const botCards = botLayer.getCards();

    for (const card of botCards) {
      const isRelevantCard = compareCardWithUpcard(
        card,
        this.table.getUpcard(),
        this.table.getActiveColor()
      );

      if (!isRelevantCard) {
        continue;
      }

      this.discardCard(card);
      return;
    }

    this.takeCard(1);
  }

  async discardCard(movedCard: CardType) {
    const activePlayerLayer = this.getActivePlayer();

    if (!activePlayerLayer) return;

    activePlayerLayer.removeCard(movedCard, () => {
      this.emit(GameEvents.CARD_MOVEMENT);
    });
    this.table.addUpcard(movedCard);

    /* Если у активного игрока не осталось карт на руке, завершаем игру */
    if (activePlayerLayer.getCards().length === 0) {
      setTimeout(() => {
        this.finishGame();
      }, ANIMATION_TIME);

      return;
    }

    /* Если у активного игрока осталась одна карта на руке, проверяем, был ли клик по кнопке 'UNO' */
    if (activePlayerLayer.getCards().length === 1) {
      /* Боту кликать не нужно */
      if (this.players[this.activePlayerId].isBot) {
        this.unoClick();
      } else {
        /* Проверяем, что "живой" игрок сделал клик */
        let clickUno = false;

        const cb = () => {
          clickUno = true;
        };

        /* Подписка на событие клика по кнопке UNO */
        this.on(GameEvents.CLICK_UNO, cb);

        /* Если за 1,5 сек клика не было, игроку выдаются 2 карты на руку и ход переходит к след. игроку */
        await sleep(2000, () => {
          if (!clickUno) {
            this.emit(GameEvents.SKIP_CLICK_UNO);
            this.takeCard(2);
            return;
          }

          this.off(GameEvents.CLICK_UNO, cb);
        });
      }
    }

    /* Проверяем, была ли выложена спец.карта. Если да, выполняем действие карты */
    const isSpecialCard = this.checkCard(movedCard);
    const time = isSpecialCard ? ANIMATION_TIME : 0;

    sleep(time, () => {
      this.moveLine();
    });
  }

  checkCard(card: CardType) {
    switch (card.action) {
      case 'draw two':
        /* Следующий игрок берёт две карты и пропускает ход */
        this.skipMove();
        this.takeCard(2);
        return true;

      case 'wild': {
        /* Игрок выбирает новый цвет */
        const newColor =
          cardColors[Math.floor(Math.random() * cardColors.length)];
        this.table.setColor(newColor);
        return true;
      }

      case 'wild draw four': {
        /* Игрок выбирает новый цвет, а следующий игрок берёт 4 карты */
        const newColor =
          cardColors[Math.floor(Math.random() * cardColors.length)];
        this.table.setColor(newColor);
        this.skipMove();
        this.takeCard(4);
        return true;
      }

      case 'reverse':
        /* Очёрёдность хода меняется в обратную сторону */
        /* Но если два игрока, то второй игрок пропускает ход */
        if (this.players.length === 2) {
          this.skipMove();
        } else {
          this.clockwiseMovement = !this.clockwiseMovement;
        }
        return true;

      case 'skip':
        /* Следующий игрок пропускает ход */
        this.skipMove();
        return true;
    }
  }

  takeCard(countCards: number) {
    /* Обновление закрытой колоды когда карты заканчиваются */
    this.table.renewClosePack();

    const cards = this.table.giveCards(countCards);
    const activePlayer = this.getActivePlayer();

    if (!activePlayer) return;

    if (countCards > 1) {
      sleep(ANIMATION_TIME, () => {
        activePlayer.addCards(cards, () => {
          this.emit(GameEvents.CARD_MOVEMENT);
        });
      });
    } else {
      activePlayer.addCards(cards, () => {
        this.emit(GameEvents.CARD_MOVEMENT);
      });
    }

    if (countCards !== 1) {
      return;
    }

    /* Если берётся 1 карта и её можно выложить на стол, то игрок должен это сделать */
    /* Проверка, можно ли сбросить эту карту */
    const isRelevantCard = compareCardWithUpcard(
      cards[0],
      this.table.getUpcard(),
      this.table.getActiveColor()
    );

    /* Если карта не подходит, переход хода */
    if (!isRelevantCard) {
      this.moveLine();
      return;
    }

    const { isBot } = this.players[this.activePlayerId];

    /* Если ход юзера, ждём клик */
    if (!isBot) {
      return;
    }

    /* Если ход бота, делаем за него ход */
    const card = activePlayer.getCards().at(-1);

    if (!card) {
      return;
    }

    setTimeout(() => {
      this.discardCard(card);
    }, 1000);
  }

  /* Переход хода */
  moveLine() {
    const activePlayer = this.getActivePlayer();
    if (!activePlayer) return;

    activePlayer.removeHighlight();

    this.changeActivePlayerId();
    this.getActivePlayer()!.highlight();

    const { isBot } = this.players[this.activePlayerId];

    if (isBot) {
      setTimeout(() => {
        this.botMove();
      }, 2000);
    }
  }

  /* Пропуск хода (когда на стол выкладывается спец.карта) */
  skipMove() {
    const activePlayer = this.getActivePlayer();
    if (!activePlayer) return;
    activePlayer.removeHighlight();

    this.changeActivePlayerId();
  }

  changeActivePlayerId() {
    switch (this.clockwiseMovement) {
      case true:
        if (this.activePlayerId === this.players.length - 1) {
          this.activePlayerId = 0;
        } else {
          this.activePlayerId++;
        }
        break;

      case false:
        if (this.activePlayerId === 0) {
          this.activePlayerId = this.players.length - 1;
        } else {
          this.activePlayerId--;
        }
    }
  }

  getActivePlayer(): HandEntity | undefined {
    const entityName =
      this.players.length === 2
        ? TwoPlayerLayers[this.activePlayerId]
        : FourPlayerLayers[this.activePlayerId];

    return this.handEntities[entityName];
  }

  finishGame() {
    const isBot = this.players[this.activePlayerId].isBot;
    const points = isBot ? 0 : this.countPoints();
    const user = this.players.find(player => !player.isBot);

    this.resetGame();

    /* Если победил бот или юзер не авторизован, данные для обновления лидерборда не нужны */
    if (
      !points ||
      (user?.score === undefined &&
        user?.wins_2 === undefined &&
        user?.wins_4 === undefined)
    ) {
      /* Вызов события завершения игры */
      this.emit('finish', points);
      return;
    }

    /* Если юзер авторизован и победил, обновляем данные для лидерборда */
    const pointsForLB = this.players.length === 2 ? points : points * 0.5;
    user.score! = pointsForLB > user.score! ? pointsForLB : user.score!;

    user.total_wins! += 1;

    if (this.players.length === 2) {
      user.wins_2! += 1;
    } else {
      user.wins_4! += 1;
    }

    /* Вызов события завершения игры */
    this.emit('finish', points, {
      score: user.score,
      wins_2: user.wins_2,
      wins_4: user.wins_4,
      total_wins: user.total_wins,
    });
  }

  countPoints() {
    let points = 0;
    for (const entity in this.handEntities) {
      const cards = this.handEntities[entity].getCards();
      points += countPoints(cards);
    }

    return points;
  }

  resetGame() {
    const elements: HTMLDivElement[] = [];

    if (this.table) {
      elements.push(this.table.getLayer());
      this.table.reset();
    }

    for (const layer in this.handEntities) {
      elements.push(this.handEntities[layer].getLayer());
    }
    if (elements.length) {
      clearGamePage(elements);
    }

    this.activePlayerId = -1;
    this.handEntities = {};
    this.clockwiseMovement = true;
  }

  /* Генерация клика по кнопке UNO */
  unoClick() {
    const activePlayer = this.getActivePlayer();
    if (activePlayer && activePlayer.getCards().length === 1) {
      this.emit(GameEvents.CLICK_UNO);
      this.getActivePlayer()?.showTooltip();
    }
  }

  unload() {
    this.resetGame();
    this.players = [];
    this.destroy();
  }
}
