import { Game } from 'game';
import { GameEvents, GamePlayerType, ResultData } from './types';
import { PlayerClickPosition } from './types';

class Controller {
  game!: Game;

  initGame() {
    this.game = new Game();
  }

  startGame(playersNum: number, playerData?: GamePlayerType) {
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
    this.game.on(GameEvents.CARD_MOVEMENT, callback);
    return () => this.game.off(GameEvents.CARD_MOVEMENT, callback);
  }

  onUnoClick(callback: () => void) {
    this.game.on(GameEvents.CLICK_UNO, callback);
    return () => this.game.off(GameEvents.CLICK_UNO, callback);
  }

  onSkipUnoClick(callback: () => void) {
    this.game.on(GameEvents.SKIP_CLICK_UNO, callback);
    return () => this.game.off(GameEvents.SKIP_CLICK_UNO, callback);
  }

  onFinish(callback: (points: number, playerData?: ResultData) => void) {
    this.game.on(GameEvents.FINISH_GAME, callback);
    return () => this.game.off(GameEvents.FINISH_GAME, callback);
  }

  unloadGame() {
    this.game.unload();
  }
}

export const controller = new Controller();
