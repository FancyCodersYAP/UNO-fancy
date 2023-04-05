import {
  allCards,
  cardColors,
  FourPlayerLayers,
  TwoPlayerLayers,
  addPlayers,
  compareCards,
  shuffle,
  sleep,
  clearGamePage,
} from './utils';
import {
  BASE_HEIGHT_CARD,
  BASE_WIDTH_CARD,
  ANIMATION_TIME,
  START_NUM_CARDS_IN_HAND,
} from './utils/constants';
import { CardType, GamePlayerType, HandEntityTypes } from './types';
import { HandEntity } from './entities/HandEntity';
import { TableEntity } from './entities/TableEntity';
import { EventBus } from './utils/EventBus';

export class Game extends EventBus {
  activePlayerId = -1;
  players: GamePlayerType[] = [];
  handEntities: Record<string, HandEntity> = {};
  table!: TableEntity;

  activeColor = '';
  clockwiseMovement = true;

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
    let zIndex = 10;
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
      this.handEntities[entityName].addCards(cards);

      zIndex -= 1;
    }

    /* Из стартовой колоды берём одну карту для открытия */
    const lastCard = initialPack.pop();
    if (lastCard) {
      /* Открываем карту поле раздачи всех карт игрокам */
      setTimeout(() => {
        this.table.addUpcard(lastCard);
      }, ANIMATION_TIME * START_NUM_CARDS_IN_HAND);

      if (lastCard.action) {
        setTimeout(() => {
          this.checkCard(lastCard);
          this.moveLine();
        }, ANIMATION_TIME * (START_NUM_CARDS_IN_HAND + 1));
      } else {
        this.activePlayerId = 0;
        this.getActivePlayer().highlight();
      }

      this.activeColor = lastCard.color;
    }
    /* Оставшаяся часть карт будет в закрытой колоде */
    this.table.setClosePack(initialPack);
  }

  /* Проверяем, может ли в текущий момент игрок выполнить ход */
  checkPosiibilityOfAction() {
    return this.activePlayerId === 0;
  }

  /* Юзер берёт карту со стола */
  playerTakeCard(clickPos: Record<string, number>) {
    const playerLayer = this.handEntities['frontHand'];
    const playerCards = playerLayer.cards;
    const { x: xClick, y: yClick } = clickPos;

    /* Если клик по слою стола был не на закрытой колоде, ничего не происходит */
    if (
      xClick <= 0 &&
      xClick >= BASE_WIDTH_CARD &&
      yClick <= 0 &&
      yClick >= BASE_HEIGHT_CARD
    ) {
      console.log('Чтобы взять карту, нужно кликнуть по закрытой колоде');
      return;
    }

    /* Если есть карта, которую можно скинуть, то взять из закрытой колоды нельзя */
    for (let i = playerCards.length - 1; i >= 0; i--) {
      const card = playerCards[i];

      if (compareCards(card, this.table.getUpcard(), this.activeColor)) {
        console.log('Нужно сбросить карту');

        return;
      }
    }

    /* Если проверки пройдены, юзер берёт карту */
    this.takeCard(1);
  }

  /* Юзер сбрасывет карту с руки */
  playerDiscardCard(clickPos: Record<string, number>) {
    console.log('Ход игрока');

    const playerLayer = this.handEntities['frontHand'];
    const playerCards = playerLayer.cards;
    const { x: xClick, y: yClick } = clickPos;

    for (let i = playerCards.length - 1; i >= 0; i--) {
      const card = playerCards[i];

      /* Поиск карты, по которой был клик */
      if (
        xClick >= card.x! &&
        xClick <= card.x! + BASE_WIDTH_CARD &&
        yClick >= card.y! &&
        yClick <= card.y! + BASE_HEIGHT_CARD
      ) {
        /* Проверка, можно ли сбросить эту карту */
        if (compareCards(card, this.table.getUpcard(), this.activeColor)) {
          console.log('Перемещение карты');

          this.discardCard(card);
        } else {
          console.log('Карта не подходит');
        }
        /* Завершаем цикл поиска карты */
        return;
      }
    }
  }

  botMove() {
    console.log('Ход бота');
    const botLayer = this.getActivePlayer();
    const botCards = botLayer.cards;

    for (let i = 0; i < botCards.length; i++) {
      const card = botCards[i];

      if (compareCards(card, this.table.getUpcard(), this.activeColor)) {
        this.discardCard(card);
        return;
      }
    }

    this.takeCard(1);
  }

  async discardCard(movedCard: CardType) {
    const activePlayerLayer = this.getActivePlayer();

    activePlayerLayer.removeCard(movedCard);
    this.table.addUpcard(movedCard);
    this.activeColor = movedCard.color;

    /* Если у активного игрока не осталось карт на руке, завершаем игру */
    if (activePlayerLayer.cards.length === 0) {
      setTimeout(() => {
        this.finishGame();
      }, ANIMATION_TIME);
      return;
    }

    /* Если у активного игрока осталась одна карта на руке, проверяем, был ли клик по кнопке 'UNO' */
    if (activePlayerLayer.cards.length === 1) {
      if (this.players[this.activePlayerId].isBot) {
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
            console.log('Юзер не нажал на кнопку');
            this.takeCard(2);
            return;
          } else {
            this.off('click uno', cb);
          }
        });
      }
    }

    /* Проверяем, была ли выложена спец.карта. Если да, выполняем действие карты */
    this.checkCard(movedCard);

    this.moveLine();
  }

  checkCard(card: CardType) {
    if (card.action === 'draw two') {
      /* Следующий игрок берёт две карты и пропускает ход */
      this.skipMove();
      this.takeCard(2);
    }

    if (card.action === 'wild') {
      /* Игрок выбирает новый цвет */
      this.activeColor =
        cardColors[Math.floor(Math.random() * cardColors.length)];
      this.table.setColor(this.activeColor);
    }

    if (card.action === 'wild draw four') {
      /* Игрок выбирает новый цвет, а следующий игрок берёт 4 карты */
      this.activeColor =
        cardColors[Math.floor(Math.random() * cardColors.length)];
      this.table.setColor(this.activeColor);
      this.skipMove();
      this.takeCard(4);
    }

    if (card.action === 'reverse') {
      /* Очёрёдность хода меняется в обратную сторону */
      /* Но если два игрока, то второй игрок пропускает ход */
      if (this.players.length === 2) {
        this.skipMove();
      } else {
        this.clockwiseMovement = this.clockwiseMovement === true ? false : true;
      }
    }

    if (card.action === 'skip') {
      /* Следующий игрок пропускает ход */
      this.skipMove();
    }
  }

  takeCard(countCards: number) {
    /* Обновление закрытой колоды когда карты заканчиваются */
    this.table.renewClosePack();

    const cards = this.table.giveCards(countCards);
    const activePlayer = this.getActivePlayer();

    activePlayer.addCards(cards);

    /* Если берётся 1 карта и её можно выложить на стол, то игрок должен это сделать */
    if (countCards === 1) {
      if (compareCards(cards[0], this.table.getUpcard(), this.activeColor)) {
        /* Если ход бота, делаем за него ход */
        if (this.players[this.activePlayerId].isBot) {
          console.log('Бот через секунду скинет карту');
          const card = activePlayer.cards.at(-1);

          if (card) {
            setTimeout(() => {
              this.discardCard(card);
            }, 1000);
          }
        } else {
          /* Если ход юзера, ждём клик */
          console.log('Можно скинуть карту');
        }
      } else {
        /* Если карта не подходит, переход хода */
        this.moveLine();
      }
    }
  }

  /* Переход хода */
  moveLine() {
    if (this.activePlayerId !== -1) {
      this.getActivePlayer().removeHighlight();
    }
    this.changeActivePlayerId();
    this.getActivePlayer().highlight();

    if (this.players[this.activePlayerId].isBot) {
      setTimeout(() => {
        this.botMove();
      }, 2000);
    }
  }

  /* Пропуск хода (когда на стол выкладывается спец.карта) */
  skipMove() {
    if (this.activePlayerId !== -1) {
      this.getActivePlayer().removeHighlight();
    }
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
        if (this.activePlayerId === 0 || this.activePlayerId === -1) {
          this.activePlayerId = this.players.length - 1;
        } else {
          this.activePlayerId--;
        }
    }
  }

  getActivePlayer() {
    const entityName =
      this.players.length === 2
        ? TwoPlayerLayers[this.activePlayerId]
        : FourPlayerLayers[this.activePlayerId];

    return this.handEntities[entityName];
  }

  finishGame() {
    const elements = [this.table.layer];
    for (const layer in this.handEntities) {
      elements.push(this.handEntities[layer].layer);
    }
    clearGamePage(elements);
    /* Вызов события завершения игры */
    this.emit('finish');
  }

  /* Генерация клика по кнопке UNO */
  getUnoClick() {
    if (this.getActivePlayer().cards.length === 1) {
      this.emit('click uno');
    }
  }
}
