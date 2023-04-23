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
} from './utils';
import {
  BASE_HEIGHT_CARD,
  BASE_WIDTH_CARD,
  ANIMATION_TIME,
  START_NUM_CARDS_IN_HAND,
  startZindexForLayers,
} from './utils/constants';
import {
  CardType,
  GamePlayerType,
  HandEntityTypes,
  PlayerClickPosition,
} from './types';
import { HandEntity, TableEntity } from './entities';
import { EventBus } from './utils/EventBus';
import { countPoints } from './utils/countPoints';

export class Game extends EventBus {
  private activePlayerId = -1;
  private players: GamePlayerType[] = [];
  private handEntities: Record<string, HandEntity> = {};
  private table!: TableEntity;

  private clockwiseMovement = true;

  constructor() {
    super();
  }

  startGame(playersNum: number, playerData: GamePlayerType) {
    this.players = addPlayers(playersNum, playerData);

    /* Перемешиваем массив карт. Это стартовая колода */
    const initialPack = shuffle(allCards);

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
        this.emit('card move');
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
        this.emit('card move');
      });
    }, ANIMATION_TIME * START_NUM_CARDS_IN_HAND);

    this.activePlayerId = 0;
    this.getActivePlayer().highlight();

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
      }, ANIMATION_TIME * (START_NUM_CARDS_IN_HAND + 1));
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

    activePlayerLayer.removeCard(movedCard, () => {
      this.emit('card move');
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
        console.log('У бота осталась одна карта');
      } else {
        /* Проверяем, что "живой" игрок сделал клик */
        let clickUno = false;

        const cb = () => {
          clickUno = true;
          console.log('У юзера осталась одна карта');
        };

        /* Подписка на событие клика по кнопке UNO */
        this.on('click uno', cb);

        /* Если за 1,5 сек клика не было, игроку выдаются 2 карты на руку и ход переходит к след. игроку */
        await sleep(1500, () => {
          if (!clickUno) {
            this.emit('skip click uno');
            this.takeCard(2);
            return;
          }

          this.off('click uno', cb);
        });
      }
    }

    /* Проверяем, была ли выложена спец.карта. Если да, выполняем действие карты */
    this.checkCard(movedCard);

    this.moveLine();
  }

  checkCard(card: CardType) {
    switch (card.action) {
      case 'draw two':
        /* Следующий игрок берёт две карты и пропускает ход */
        this.skipMove();
        this.takeCard(2);
        break;

      case 'wild': {
        /* Игрок выбирает новый цвет */
        const newColor =
          cardColors[Math.floor(Math.random() * cardColors.length)];
        this.table.setColor(newColor);
        break;
      }
      case 'wild draw four': {
        /* Игрок выбирает новый цвет, а следующий игрок берёт 4 карты */
        const newColor =
          cardColors[Math.floor(Math.random() * cardColors.length)];
        this.table.setColor(newColor);
        this.skipMove();
        this.takeCard(4);
        break;
      }
      case 'reverse':
        /* Очёрёдность хода меняется в обратную сторону */
        /* Но если два игрока, то второй игрок пропускает ход */
        if (this.players.length === 2) {
          this.skipMove();
        } else {
          this.clockwiseMovement = !this.clockwiseMovement;
        }
        break;

      case 'skip':
        /* Следующий игрок пропускает ход */
        this.skipMove();
        break;
    }
  }

  takeCard(countCards: number) {
    /* Обновление закрытой колоды когда карты заканчиваются */
    this.table.renewClosePack();

    const cards = this.table.giveCards(countCards);
    const activePlayer = this.getActivePlayer();

    activePlayer.addCards(cards, () => {
      this.emit('card move');
    });

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
    console.log(this.getActivePlayer());
    this.getActivePlayer().removeHighlight();

    this.changeActivePlayerId();
    this.getActivePlayer().highlight();

    const { isBot } = this.players[this.activePlayerId];

    if (isBot) {
      setTimeout(() => {
        this.botMove();
      }, 2000);
    }
  }

  /* Пропуск хода (когда на стол выкладывается спец.карта) */
  skipMove() {
    this.getActivePlayer().removeHighlight();

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

  getActivePlayer(): HandEntity {
    const entityName =
      this.players.length === 2
        ? TwoPlayerLayers[this.activePlayerId]
        : FourPlayerLayers[this.activePlayerId];

    return this.handEntities[entityName];
  }

  finishGame() {
    const elements = [this.table.getLayer()];

    for (const layer in this.handEntities) {
      elements.push(this.handEntities[layer].getLayer());
    }
    clearGamePage(elements);

    const points = this.players[this.activePlayerId].isBot
      ? 0
      : this.countPoints();
    /* Вызов события завершения игры */
    this.emit('finish', points);
  }

  countPoints() {
    let points = 0;
    for (const entity in this.handEntities) {
      const cards = this.handEntities[entity].getCards();
      points += countPoints(cards);
    }

    return points;
  }

  /* Генерация клика по кнопке UNO */
  unoClick() {
    if (this.getActivePlayer().getCards().length === 1) {
      this.emit('click uno');
    }
  }
}
