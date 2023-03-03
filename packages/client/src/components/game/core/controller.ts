import { PlayerType } from '../types';
import { Game } from './game';

class Controller {
  game!: Game;

  initGame(context: CanvasRenderingContext2D) {
    this.game = new Game(context);
    this.game.init();
  }

  startGame(playersNum: number, playerData: PlayerType) {
    this.game.setPlayersNum(playersNum);

    this.game.addPlayer(playerData);

    for (let i = 0; i < playersNum - 1; i++) {
      this.game.addBot();
    }

    this.game.start();
  }

  move(clickPos: Record<string, number>) {
    this.game.checkPosiibilityOfAction(clickPos);
  }

  unoClick() {
    this.game.unoCkick();
  }

  onFinish(callback: () => void) {
    this.game.on('finish', callback);
    return () => this.game.off('finish', callback);
  }
}

export const controller = new Controller();
