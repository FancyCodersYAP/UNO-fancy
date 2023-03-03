import { EventBus } from '../utils/EventBus';
import { CardType, PlayerType } from '../types';
import { shuffle, sleep } from '../utils/helpers';
import { allCards, namesForBots } from '../utils/data';
import {
  Card,
  FrontCards,
  TopCards,
  TableCards,
  LeftCards,
  RightCards,
  Entity,
} from '../entities';
import {
  closedPackCoords,
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  NUM_CARDS_IN_HAND,
} from '../utils/constants';

export class Game extends EventBus {
  context: CanvasRenderingContext2D;

  totalPlayers = -1;
  thisPlayerId = -1;
  players: PlayerType[] = [];
  currentPlayer = -1;
  nextPlayer = -1;
  tablePack: CardType[] = [];
  openCard: CardType = {};

  tableCards!: TableCards;
  frontPlayer!: Entity;
  topPlayer!: Entity;
  leftPlayer!: Entity;
  rightPlayer!: Entity;

  constructor(context: CanvasRenderingContext2D) {
    super();
    this.context = context;
  }

  setPlayersNum(playersNum: number) {
    this.totalPlayers = playersNum;
  }

  init() {
    this.currentPlayer = 0;
    this.nextPlayer = 1;
  }

  addPlayer(playerData: PlayerType) {
    const playerId = this.players.length;
    this.thisPlayerId = playerId;

    this.players.push({ ...playerData, id: playerId, cards: [] });
  }

  addBot() {
    const botId = this.players.length;
    const botName = namesForBots[this.players.length - 1];

    this.players.push({ name: botName, id: botId, cards: [], isBot: true });
  }

  start() {
    /* Перемешиваем массив карт. Это стартовая колода */
    const initialPack = shuffle(allCards);

    /* Из стартовой колоды берём 7 * n (кол-во игроков) карт для раздачи игрокам */
    const cardsForDistribution = initialPack.splice(
      initialPack.length - 1 - NUM_CARDS_IN_HAND * this.players.length,
      NUM_CARDS_IN_HAND * this.players.length
    );

    /* Из стартовой колоды берём одну карту для открытия */
    this.openCard = initialPack.splice(initialPack.length - 1 - 1, 1)[0];
    /* Оставшаяся часть карт будет в закрытой колоде */
    this.tablePack = initialPack;

    /* Раздаём карты игрокам */
    let curPl = 0;
    for (let i = 0; i < cardsForDistribution.length; i++) {
      if (this.totalPlayers === 2) {
        i % 2 === 0
          ? this.players[0].cards.push(cardsForDistribution[i])
          : this.players[1].cards.push(cardsForDistribution[i]);
      }

      if (this.totalPlayers === 4) {
        this.players[curPl].cards.push(cardsForDistribution[i]);

        if (curPl === 3) {
          curPl = 0;
        } else {
          curPl++;
        }
      }
    }

    /* Первым в игре с ботами ходит "живой" игрок */
    this.currentPlayer = this.thisPlayerId;

    /* Отрисовываем сущности */
    this.tableCards = new TableCards(
      this.tablePack,
      this.openCard,
      this.context
    );
    this.tableCards.draw();

    /* "Живой" игрок */
    this.frontPlayer = new FrontCards(this.context);
    this.frontPlayer.init(
      this.players[this.thisPlayerId].cards,
      this.players[this.thisPlayerId].name
    );
    this.frontPlayer.activateFlag();

    /* Боты */
    if (this.totalPlayers === 2) {
      const botId = this.players.find(player => player.isBot === true)?.id;

      /* Проверка, чтобы eslint не ругался */
      if (!botId) return;

      this.topPlayer = new TopCards(this.context);
      this.topPlayer.init(this.players[botId].cards, this.players[botId].name);
    } else {
      const bots = this.players.filter(player => player.isBot === true);

      this.rightPlayer = new RightCards(this.context);
      this.rightPlayer.init(
        this.players[bots[0].id].cards,
        this.players[bots[0].id].name
      );

      this.topPlayer = new TopCards(this.context);
      this.topPlayer.init(
        this.players[bots[1].id].cards,
        this.players[bots[1].id].name
      );

      this.leftPlayer = new LeftCards(this.context);
      this.leftPlayer.init(
        this.players[bots[2].id].cards,
        this.players[bots[2].id].name
      );
    }
  }

  /* Проверяем, может ли в текущий момент игрок выполнить ход */
  checkPosiibilityOfAction(clickPos?: Record<string, number>) {
    if (this.currentPlayer !== this.thisPlayerId) {
      console.log('Ход другого игрока');
      return;
    } else {
      this.playerMove(clickPos);
    }
  }

  /* Действие хода */
  playerMove(clickPos?: Record<string, number>) {
    /* Если есть координаты, ходит игрок */
    if (clickPos) {
      console.log('Ход игрока');

      const player = this.frontPlayer;
      const playerCards = player.getHand();
      const { x, y } = clickPos;

      let attemptTakeCard = false;
      let rightMove = true;

      /* Проверяем был ли клик по закрытой колоде */
      if (
        x >= closedPackCoords[0] &&
        x <= closedPackCoords[0] + BASE_WIDTH_CARD &&
        y >= closedPackCoords[1] &&
        y <= closedPackCoords[1] + BASE_HEIGHT_CARD
      ) {
        attemptTakeCard = true;
      }

      /* Проверяем все карты на руке игрока */
      for (let i = playerCards.length - 1; i >= 0; i--) {
        const card = playerCards[i];

        /* Если это попытка взять карту со стола, проверяем нет ли в руке подходящей карты для сброса */
        if (attemptTakeCard === true) {
          if (this.checkCard(card)) {
            rightMove = false;

            console.log('Нужно сбросить карту');
            return;
          }
        } else {
          /* При клике не по закрытой колоде проверяем: */
          /* 1. Попал ли клик по карте */
          if (
            x >= card.xPoint &&
            x <= card.xPoint + card.width &&
            y >= card.yPoint &&
            y <= card.yPoint + card.height
          ) {
            // 2. Можно ли сбросить эту карту
            if (this.checkCard(card)) {
              this.dropCard(player, card);

              console.log('Перемещение карты');
              return;
            } else {
              console.log('Карта не подходит');
              return;
            }
          }
        }
      }

      /* Подходящей карты в руке нет, можно брать карту из колоды */
      if (attemptTakeCard && rightMove) {
        this.takeCard(false);

        return;
      }

      console.log('Нужно кликнуть по карте');
    } else {
      /* Если нет координат клика, ходит бот */
      console.log('Ход бота');

      const bot = this.identifyEntity();
      const botCards = bot.getHand();

      /* Проверяем, есть ли на руке подходящая карта для сброса */
      for (let i = 0; i < botCards.length; i++) {
        const card = botCards[i];

        if (this.checkCard(card)) {
          this.dropCard(bot, card);
          return;
        }
      }

      /* Если подходящей карты нет, бот берёт карту из колоды */
      this.takeCard(false);

      return;
    }
  }

  /* Сброс карты с руки */
  async dropCard(player: Entity, movedCard: Card) {
    this.players = this.players.map(player => {
      if (player.id === this.currentPlayer) {
        return {
          ...player,
          cards: player.cards.filter(c => c.id !== movedCard.id),
        };
      }
      return player;
    });

    /* Удаляем карту с руки и перерисовываем руку */
    player.removeCard(movedCard);

    /* Заменяем откурытую карту на столе */
    this.openCard = movedCard;
    /* Перерисовываем стол */
    this.tableCards.dropCard(this.openCard);

    /* Если у активного игрока не осталось карт на руке, завершаем игру */
    if (this.players[this.currentPlayer].cards.length === 0) {
      this.finishGame();
      return;
    }

    /* Если у активного игрока осталась одна карта на руке, проверяем, был ли клик по кнопке 'UNO' */
    if (this.players[this.currentPlayer].cards.length === 1) {
      const player = this.identifyEntity();

      /* Боты кликать не забывают, поэтому сразу bubble */
      if (this.players[this.currentPlayer].isBot === true) {
        player.showBubble('UNO');
        this.moveLine();

        return;
      }

      let clickUno = false;

      const cb = () => {
        clickUno = true;

        player.showBubble('UNO');
      }
      /* Подписка на событие клика по кнопке UNO */
      this.on('click uno', cb);

      /* Если за 1,5 сек клика не было, игроку выдаются 2 карты на руку и ход переходит к следующему игроку */
      await sleep(() => {
        if (!clickUno) {
          this.takeCard(true);
          this.takeCard(true);

          this.off('click uno', cb);
        }
      });
    }

    /* Переход хода */
    this.moveLine();

    /* Если ход перешёл к боту, делаем ход за бота */
    if (this.checkBot()) {
      setTimeout(() => {
        this.playerMove();
      }, 2000);
    }
  }

  /* Взятие карты на руку */
  takeCard(skip: boolean) {
    const card = this.tablePack.splice(this.tablePack.length - 1 - 1, 1)[0];

    this.players[this.currentPlayer].cards.push(card);

    const player = this.identifyEntity();
    player.addCard(card);

    /* Если игрок после взятия карты должен пропустить ход, завершаем функцию */
    if (skip) {
      return;
    }

    /* Если полученную карту можно выложить на стол, то игрок должен это сделать */
    /* Данная проверка только для хода бота, так как игрок должен самостоятельно кликнуть по карте */
    if (this.checkCard(card)) {
      if (this.checkBot()) {
        const player = this.identifyEntity();
        const movedCard = player.getHand().at(-1);

        /* Проверка, чтобы eslint не ругался */
        if (!movedCard) return;

        /* Если карта подходящая, бот сбрасывает её через секунду */
        setTimeout(() => {
          this.dropCard(player, movedCard);
        }, 1000);
      }
    } else {
      /* Картой походить нельзя, ход переходит следующему игроку */
      this.moveLine();

      /* Если следующим ходит бот, выполняем его ход через 2 секунды */
      if (this.checkBot()) {
        setTimeout(() => {
          this.playerMove();
        }, 2000);
      }
    }
  }

  /* Вызов события завершения игры */
  finishGame() {
    console.log('Игра завершена');
    this.emit('finish');
  }

  /* Генерация клика по кнопке UNO */
  unoCkick() {
    console.log('uno click');
    this.emit('click uno');
  }

  /* Определение сущности активного игрока */
  identifyEntity() {
    if (this.currentPlayer === 0) {
      return this.frontPlayer;
    } else if (this.currentPlayer === 1) {
      return this.totalPlayers === 2 ? this.topPlayer : this.rightPlayer;
    } else if (this.currentPlayer === 2) {
      return this.topPlayer;
    } else {
      return this.leftPlayer;
    }
  }

  /* Переход хода */
  moveLine() {
    const player = this.identifyEntity();
    player.removeFlag();

    this.currentPlayer = this.nextPlayer;

    if (this.currentPlayer === this.totalPlayers - 1) {
      this.nextPlayer = 0;
    } else {
      this.nextPlayer += 1;
    }

    const newActivePlayer = this.identifyEntity();
    newActivePlayer.activateFlag();
  }

  /* Сверка карты с руки с открытой картой на столе */
  checkCard(cardFromHand: CardType) {
    if (cardFromHand.color === this.openCard.color) return true;
    if (cardFromHand.digit === this.openCard.digit) return true;

    return false;
  }

  /* Проверка на бота */
  checkBot() {
    return this.players[this.currentPlayer].isBot;
  }
}
