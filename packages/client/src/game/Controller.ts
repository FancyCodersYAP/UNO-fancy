import { Game } from './Game';
import { GamePlayerType } from './types';

class Controller {
  game!: Game;

  initGame() {
    this.game = new Game();
  }

  startGame(playersNum: number, playerData: GamePlayerType) {
    this.game.startGame(playersNum, playerData);
  }

  move(clickPos: Record<string, number>) {
    if (this.game.checkPosiibilityOfAction()) {
      this.game.playerDiscardCard(clickPos);
    } else {
      console.log('Ход другого игрока');
    }
  }

  tableClick(clickPos: Record<string, number>) {
    if (this.game.checkPosiibilityOfAction()) {
      this.game.playerTakeCard(clickPos);
    } else {
      console.log('Ход другого игрока');
    }
  }

  unoClick() {
    this.game.getUnoClick();
  }

  onFinish(callback: () => void) {
    this.game.on('finish', callback);
    return () => this.game.off('finish', callback);
  }
}

export const controller = new Controller();
