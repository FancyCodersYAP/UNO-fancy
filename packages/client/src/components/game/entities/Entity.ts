import { Card } from './Card';
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  BASE_WIDTH_CARD,
  BASE_HEIGHT_CARD,
  NAME_DATA,
  FLAG_DATA,
  BUBBLE_DATA,
} from '../utils/constants';
import { CardType } from '../types';

export class Entity {
  protected hand: Card[] = [];
  protected direction: 'vertical' | 'horizontal' = 'horizontal';
  xStart = 0;
  yStart = 0;
  xUnified = 0;
  yUnified = 0;
  visiblePartOfCard = 30;

  /* Координаты имени. Нужны для расчета координатов флага */
  nameCoords: number[] = [];

  flag = false;

  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  /* Вызываем при первой выкладке на "стол" */
  init(cards: CardType[], name?: string) {
    this.drawName(name);

    /* Рассчёт начальной координаты для отрисовки "руки" */
    this.calcFirstCardCoords(cards.length);
    /* Установка размера видимой части карты */
    this.setVisiblePartOfCard(cards.length);

    /* Отрисовка всех карт */
    let x = this.direction === 'horizontal' ? this.xStart : this.xUnified;
    let y = this.direction === 'vertical' ? this.yStart : this.yUnified;

    for (let i = 0; i < cards.length; i++) {
      this.hand[i] = new Card(cards[i], this.context);

      this.hand[i].draw(x, y);
      if (this.direction === 'horizontal') {
        x += this.visiblePartOfCard;
      } else {
        y += this.visiblePartOfCard;
      }
    }
  }

  /* Отрисовка сразу всей руки. Найти, где используется */
  draw() {
    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].draw();
    }
  }

  /* Метод стирает всю "руку". Переопределяется в сущностях */
  clear() {
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  removeCard(card: CardType) {
    /* Закомментированы строки для включения анимации. Анимация пока не работает */
    // const removedCard = this.hand.find(c => c.id === card.id);
    this.hand = this.hand.filter(c => c.id !== card.id);
    // this.moveCard(removedCard!);
    this.clear();

    /* Рассчёт начальной координаты для отрисовки "руки" */
    /* Можно не передавать аргумент, потому что по умолчанию берётся количество карт на "руке" */
    this.calcFirstCardCoords();
    /* Установка размера видимой части карты */
    this.setVisiblePartOfCard(this.hand.length);

    /* Отрисовка карт на руке */
    let x = this.direction === 'horizontal' ? this.xStart : this.xUnified;
    let y = this.direction === 'vertical' ? this.yStart : this.yUnified;

    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].draw(x, y);

      if (this.direction === 'horizontal') {
        x += this.visiblePartOfCard;
      } else {
        y += this.visiblePartOfCard;
      }
    }
  }

  /* Переделала добавление карт, чтобы добавлять в массив this.hand сразу все карты (если их больше одной) */
  /* и перерисовывать всю руку только один раз, а добавляемые карты рисовать по одной */
  addCards(cards: CardType[]) {
    /* Рассчёт начальной координаты для отрисовки "руки" */
    this.calcFirstCardCoords(this.hand.length + cards.length);
    /* Установка размера видимой части карты */
    this.setVisiblePartOfCard(this.hand.length + cards.length);
    /* Очистка "руки" */
    this.clear();

    /* Двигаем "руку" */
    let x = this.direction === 'horizontal' ? this.xStart : this.xUnified;
    let y = this.direction === 'vertical' ? this.yStart : this.yUnified;

    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].draw(x, y);

      if (this.direction === 'horizontal') {
        x += this.visiblePartOfCard;
      } else {
        y += this.visiblePartOfCard;
      }
    }

    /* Отрисовка добавляемых карт */
    for (let i = 0; i < cards.length; i++) {
      const newCard = new Card(cards[i], this.context);
      this.hand.push(newCard);
      newCard.draw(x, y);

      if (this.direction === 'horizontal') {
        x += this.visiblePartOfCard;
      } else {
        y += this.visiblePartOfCard;
      }
    }
  }

  /* Меняем размер показываемой части карты */
  /* Чтобы, когда карт окажется много на "руке", сужать "руку" */
  setVisiblePartOfCard(cardsNum: number) {
    if (this.direction === 'horizontal') {
      if (cardsNum < 5) {
        this.visiblePartOfCard = (BASE_WIDTH_CARD / 4) * 3;
      }
      if (cardsNum >= 5 && cardsNum < 10) {
        this.visiblePartOfCard = BASE_WIDTH_CARD / 2;
      }
      if (cardsNum >= 10) {
        this.visiblePartOfCard = BASE_WIDTH_CARD / 3;
      }
    } else {
      if (cardsNum < 5) {
        this.visiblePartOfCard = BASE_HEIGHT_CARD / 2;
      }
      if (cardsNum >= 5 && cardsNum < 10) {
        this.visiblePartOfCard = BASE_HEIGHT_CARD / 3;
      }
      if (cardsNum >= 10) {
        this.visiblePartOfCard = BASE_HEIGHT_CARD / 4;
      }
    }
  }

  moveCard(card: Card) {
    card.move();
  }

  getHand() {
    return this.hand;
  }

  drawName(name?: string) {
    if (name === undefined) {
      name = 'Игрок';
    }

    this.context.beginPath();
    this.context.save();

    /* Для "рук" слева и справа переворачиваем имя */
    if (this.direction === 'vertical') {
      this.context.translate(0, CANVAS_HEIGHT);
      this.context.rotate((-90 * Math.PI) / 180);
    }

    this.context.font = `${NAME_DATA.SIZE}px ${NAME_DATA.FONTFAMILY}`;
    this.context.fillStyle = NAME_DATA.COLOR;

    const nameWidth = this.context.measureText(name).width;
    const nameHeight =
      this.context.measureText(name).actualBoundingBoxAscent +
      this.context.measureText(name).actualBoundingBoxDescent;
    const coords = this.calcNameCoords(nameWidth, nameHeight);

    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(`${name.toUpperCase()}`, coords[0], coords[1]);
    this.context.restore();
    this.context.closePath();
  }

  private drawFlag() {
    const flagCoords = this.calcFlagCoords();
    this.context.beginPath();
    this.context.arc(
      flagCoords[0],
      flagCoords[1],
      FLAG_DATA.RADIUS,
      0,
      2 * Math.PI
    );
    this.context.fillStyle = FLAG_DATA.BORDER_COLOR;
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.arc(
      flagCoords[0],
      flagCoords[1],
      FLAG_DATA.RADIUS - FLAG_DATA.BORDER_WIDTH,
      0,
      2 * Math.PI
    );
    this.context.fillStyle = FLAG_DATA.BACKGROUND;
    this.context.fill();
    this.context.closePath();
  }

  private clearFlag() {
    const flagCoords = this.calcFlagCoords();
    /* Слева и справа добавляю ещё по одному BORDER_WIDTH, т.к.остаются следы от border */
    this.context.clearRect(
      flagCoords[0] - FLAG_DATA.RADIUS - FLAG_DATA.BORDER_WIDTH * 2,
      flagCoords[1] - FLAG_DATA.RADIUS - FLAG_DATA.BORDER_WIDTH * 2,
      FLAG_DATA.RADIUS * 2 +
        FLAG_DATA.BORDER_WIDTH * 2 +
        FLAG_DATA.BORDER_WIDTH * 2,
      FLAG_DATA.RADIUS * 2 +
        FLAG_DATA.BORDER_WIDTH * 2 +
        FLAG_DATA.BORDER_WIDTH * 2
    );
  }

  public activateFlag() {
    this.flag = true;

    this.drawFlag();
  }

  public removeFlag() {
    this.flag = false;

    this.clearFlag();
  }

  showBubble(text: string) {
    const bubbleCoords = this.calcBubbleCoords();
    const bubbleWidth = BUBBLE_DATA.WIDTH;
    const bubbleHeight = BUBBLE_DATA.HEIGHT;

    this.context.beginPath();
    this.context.fillStyle = BUBBLE_DATA.BACKGROUND;
    this.context.roundRect(
      bubbleCoords[0],
      bubbleCoords[1],
      bubbleWidth,
      bubbleHeight,
      [6]
    );
    this.context.fill();
    this.context.closePath();

    this.context.beginPath();
    this.context.fillStyle = BUBBLE_DATA.TEXT_COLOR;
    this.context.font = `${BUBBLE_DATA.TEXT_SIZE}px ${BUBBLE_DATA.TEXT_FONTFAMILY}`;
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';

    const xText = bubbleCoords[0] + bubbleWidth / 2;
    const yText = bubbleCoords[1] + bubbleHeight / 2;

    this.context.fillText(text, xText, yText);
    this.context.closePath();
    setTimeout(() => {
      this.context.clearRect(
        bubbleCoords[0] - 1,
        bubbleCoords[1] - 1,
        bubbleWidth + 2,
        bubbleHeight + 2
      );
    }, 1500);
  }

  /* х для горизонтальных и у для вертикальных "рук" меняются в зависимости от кол-ва карт на руке */
  /* Поэтому каждый раз переррисовывается вся "рука" */
  calcFirstCardCoords(numCards?: number) {
    /* Рассчёт внутри каждой сущности */
  }

  /* Метод рассчитывает координаты для имени. Переопределяется в сущностях */
  calcNameCoords(width: number, height: number): number[] {
    /* Рассчёт внутри каждой сущности */
    return [];
  }

  calcFlagCoords(): number[] {
    /* Рассчёт внутри каждой сущности */
    return [];
  }

  calcBubbleCoords(): number[] {
    /* Рассчёт внутри каждой сущности */
    return [];
  }
}
