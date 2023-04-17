import { Game } from './Game';
import { GamePlayerType } from './types';
import { PlayerClickPosition } from './types';

class Controller {
  game!: Game;

  initGame() {
    this.game = new Game();
  }

  startGame(playersNum: number, playerData: GamePlayerType) {
    this.game.startGame(playersNum, playerData);
  }

  move(clickPos: PlayerClickPosition) {
    if (this.game.checkPosiibilityOfAction()) {
      this.game.playerDiscardCard(clickPos);
    }
  }

  tableClick(clickPos: PlayerClickPosition) {
    if (this.game.checkPosiibilityOfAction()) {
      this.game.playerTakeCard(clickPos);
    }
  }

  unoClick() {
    this.game.unoClick();
  }

  onMove(callback: () => void) {
    this.game.on('card move', callback);
    return () => this.game.off('card move', callback);
  }

  onFinish(callback: (points: number) => void) {
    this.game.on('finish', callback);
    return () => this.game.off('finish', callback);
  }
}

export const controller = new Controller();
