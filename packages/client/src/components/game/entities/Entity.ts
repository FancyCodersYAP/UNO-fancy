import { Card } from './Card';
import { NUM_CARDS_IN_HAND, CANVAS_WIDTH, CANVAS_HEIGHT } from '../utils/constants';
import { CardType } from '../types';

export class Entity {
  private hand: Card[] = [];
  xArr: number[] = [];
  yArr: number[] = [];
  bubbleCoords: number[] = [];

  flag = false;

  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  init(cards: CardType[], name?: string) {
    for (let i = 0; i < NUM_CARDS_IN_HAND; i++) {
      this.hand[i] = new Card(
        this.xArr[i],
        this.yArr[i],
        cards[i],
        this.context
      );
    }
    this.draw();
    this.drawName(name);
  }

  draw() {
    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].draw();
    }
  }

  drawName(name?: string) {
    if (name === undefined) {
      name = 'Игрок';
    }

    this.context.font = '20px serif';
    this.context.fillStyle = 'white';
    this.context.fillText(`${name}`, this.xArr[0] + 20, this.yArr[0] - 5);
  }

  clear() {
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  removeCard(card: CardType) {
    /* Закомментированы строки для включения анимации. Анимация пока не работает */
    // const removedCard = this.hand.find(c => c.id === card.id);
    this.hand = this.hand.filter(c => c.id !== card.id);
    // this.moveCard(removedCard!);
    this.clear();

    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].draw(this.xArr[i], this.yArr[i]);
    }
  }

  addCard(card: CardType) {
    const x = this.xArr[this.hand.length];
    const y = this.yArr[this.hand.length];

    const newCard = new Card(x, y, card, this.context);
    this.hand.push(newCard);
    newCard.draw();
  }

  moveCard(card: Card) {
    card.move();
  }

  getHand() {
    return this.hand;
  }

  drawFlag() {
    this.context.arc(this.xArr[0] + 5, this.yArr[0] - 11, 7, 0, 2 * Math.PI);
    this.context.lineWidth = 2;
    this.context.strokeStyle = 'white';
    this.context.fillStyle = 'red';
    this.context.fill();
  }

  clearFlag() {
    this.context.clearRect(
      this.xArr[0] + 5 - 9,
      this.yArr[0] - 11 - 9,
      14 + 4,
      14 + 4
    );
  }

  activateFlag() {
    this.flag = true;

    this.drawFlag();
  }

  removeFlag() {
    this.flag = false;

    this.clearFlag();
  }

  showBubble(text: string) {
    console.log(window.innerHeight);
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.width = '80px';
    div.style.height = '20px';
    div.style.left = `${this.bubbleCoords[0]}px`;
    div.style.top = `${this.bubbleCoords[1]}px`;
    div.style.borderRadius = '20px';
    div.style.textAlign = 'center';
    div.style.fontSize = '18px';
    div.style.lineHeight = '20px';
    div.style.background = 'white';
    div.innerHTML = `${text}`;
    document.getElementById('game-page')?.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1500);
  }
}
