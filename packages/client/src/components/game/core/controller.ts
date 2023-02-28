import { Card } from "../entities/Card";
import { CardType, PlayerType } from "../types";
import { Game } from "./game";

class Controller {
  game: Game | null = null;

  initGame(context: CanvasRenderingContext2D) {
    this.game = new Game(context);
    this.game.init();
  }

  startGame(player: PlayerType) {
    this.game!.addPlayer(player);
    this.game!.addBot();

    this.game!.start();
  }

  move(clickPos: Record<string, number>) {
    this.game!.playerMove(clickPos);
  }

  onStart(callback: (playerId: number, players: PlayerType[], tablePack: Card[], openCard: Card, curPlayer: number) => void) {
    this.game!.on('start', callback);
    return () => this.game!.off('start', callback);
  }

  onGame(callback: (activePlayer: number, nextPlayer: number, openCard: CardType, tablePack: CardType[], playerId: number, card: CardType) => void) {
    this.game!.on('game', callback);
    return () => this.game!.off('game', callback);
  }
}

export const controller = new Controller();