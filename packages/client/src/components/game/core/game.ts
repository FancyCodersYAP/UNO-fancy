import { EventBus } from "../utils/EventBus";
import { CardType, PlayerType, Status } from "../types";
import { shuffle } from "../utils/helpers";
import { allCards, playerBot } from "../utils/data";
import { Card, FrontCards, TopCards, TableCards } from "../entities";
import { closedPackCoords, BASE_WIDTH_CARD, BASE_HEIGHT_CARD } from "../utils/constants";

export class Game extends EventBus {
  context: CanvasRenderingContext2D;

  totalPlayers = 2;
  thisPlayerId = -1;
  players: PlayerType[] = [];
  currentPlayer = -1;
  nextPlayer = -1;
  tablePack: CardType[] = [];
  status: Status = 'start';
  openCard: CardType = {};
  // initialPack: CardType[] = [];

  playerHandle: FrontCards | null = null;
  botHandle: TopCards | null = null;
  tableCards: TableCards | null = null;


  constructor(context: CanvasRenderingContext2D) {
    super();
    this.context = context;
  }

  init() {
    this.players = [];
    this.currentPlayer = 0;
    this.nextPlayer = 1;
    this.tablePack = [];
    // this.status = 'start';
  }

  addPlayer(player: PlayerType) {
    const playerId = this.players.length;
    this.thisPlayerId = playerId;

    this.players.push({ ...player, id: playerId, cards: [] });
  }

  addBot() {
    const BotId = this.players.length;
    this.players.push({ ...playerBot, id: BotId, cards: []});
  }

  start() {
    const initialPack = shuffle(allCards);
    const NUM_CARDS_IN_HANDLE = 7;
    const cardsForDistribution = initialPack.splice(
      (initialPack.length - 1) - NUM_CARDS_IN_HANDLE * this.players.length, NUM_CARDS_IN_HANDLE * this.players.length
      );

    this.openCard = initialPack.splice((initialPack.length - 1) - 1, 1)[0];
    this.tablePack = initialPack;
    // this.status = 'game';

    for (let i = 0; i < cardsForDistribution.length; i++) {
      if (this.players.length === 2) {
        i % 2 === 0 ? this.players[0].cards.push(cardsForDistribution[i]) : this.players[1].cards.push(cardsForDistribution[i])
      }
    }

    this.currentPlayer = this.thisPlayerId;

    this.tableCards = new TableCards(this.context);
    this.tableCards.init(this.openCard);
    this.tableCards.draw();

    // closedPackDraw(this.context);

    this.playerHandle = new FrontCards(this.players[this.thisPlayerId].cards, this.context);
    this.playerHandle.init();
    this.playerHandle.draw();

    const botId = this.players.find(player => player.name === 'Bot')?.id;
    this.botHandle = new TopCards(this.players[botId!].cards, this.context);
    this.botHandle.init();
    this.botHandle.draw();

    // openPackDraw(this.openCard, this.context);

    this.emit('start', this.thisPlayerId, this.players, this.tablePack, this.openCard, this.currentPlayer);
  }

  playerMove(clickPos: Record<string, number>) {
    console.log('Ход игрока');
    const player = this.players[this.thisPlayerId];
    const { x, y } = clickPos;

    if (x >= closedPackCoords[0] && x <= closedPackCoords[0] + BASE_WIDTH_CARD && y >= closedPackCoords[1] && y <= closedPackCoords[1] + BASE_HEIGHT_CARD) {
      let rightMove = true;
      for (let i = 0; i < this.playerHandle!.handle.length; i++) {
        const card = this.playerHandle!.handle[i];
        if (this.checkCard(card)) {
          rightMove = false;
        }
      }

      if (rightMove) {
        this.takeCardFromTable('Player');
      } else {
        return
      }
    }

    for (let i = 0; i < this.playerHandle!.handle.length; i++) {
      const card = this.playerHandle!.handle[i];
      if (x >= card.xPoint && x <= card.xPoint + card.width && y >= card.yPoint && y <= card.yPoint + card.height) {
        if (this.checkCard(card)) {
          this.move(player, card);
          console.log('Перемещение карты', player.cards);
          return;
        } else {
          console.log('Карта не подходит');
          return;
        }
      }
    }
  }

  botMove() {
    console.log('Ход бота');
    const bot = this.players.find(player => player.name === 'Bot');
    if (!bot) {
      return;
    }
    
    for (let i = 0; i < bot.cards.length; i++) {
      const card = bot.cards[i];

      if (this.checkCard(card)) {
        this.move(bot, card);
        return;
      }
    }
  }

  move(player: PlayerType, movedCard: CardType) {
    this.players = this.players.map(player => {
      if (player.id === this.currentPlayer) {
        return {
          ...player,
          cards: player.cards.filter((c) => c.id !== movedCard.id)
        }
      }
      return player;
    })

    if (this.players[this.currentPlayer].name === 'Bot') {
      this.botHandle?.removeCard(movedCard);
    } else {
      this.playerHandle?.removeCard(movedCard);
    }

    this.openCard = movedCard;
    this.tableCards?.discardCard(this.openCard);
    // openPackDraw(this.openCard, this.context);

    this.moveLine();

    this.emit('game', this.currentPlayer, this.nextPlayer, this.openCard, this.tablePack, player.id, movedCard);

    // if (this.players[this.currentPlayer].cards)

    if (this.players[this.currentPlayer].name === 'Bot') {
      setTimeout(() => {
        this.botMove();
      }, 2000);
    };
  }

  takeCardFromTable(player: 'Player' | 'Bot') {
    // Продолжить здесь
    const card = this.tablePack.splice((this.tablePack.length - 1) - 1, 1)[0];

    if (player === 'Bot') {
      this.botHandle?.addCard(card);
    }
    if (player === 'Player') {
      this.playerHandle?.addCard(card);
    }
  }

  // finishGame() {}

  private moveLine() {
    this.currentPlayer = this.nextPlayer;
    if (this.currentPlayer === (this.totalPlayers - 1)) {
      this.nextPlayer = 0;
    } else {
      this.nextPlayer += 1;
    }
  }

  private checkCard(cardFromHandle: CardType) {
    if (cardFromHandle.color === this.openCard.color) return true;
    if (cardFromHandle.digit === this.openCard.digit) return true;
  
    return false;
  }
}