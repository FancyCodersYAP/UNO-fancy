import Button from 'components/Button/Button';
import { StFlex } from 'styles/global';
import Card from 'components/Card/Card';
import useCarousel from 'utils/useCarousel';
import RulesInfo from './RulesInfo';
import { css } from 'styled-components';
import {
  StCarousel,
  StCarouselBoxContainer,
  StCarouselBox,
  width100Percent,
} from 'styles/global';

const cards = [
  {
    src: 'src/assets/img/start-game-1.jpg',
    alt: 'Карточка правил',
    text: 'Избавляйтесь от\u00A0карт одного цвета в\u00A0первую очередь',
  },
  {
    src: 'src/assets/img/start-game-2.jpg',
    alt: 'Карточка правил',
    text: 'Следите за\u00A0ходами противника',
  },
  {
    src: 'src/assets/img/start-game-3.jpg',
    alt: 'Карточка правил',
    text: 'Используйте карты действий в\u00A0более подходящий момент',
  },
];

const TOTAL_SLIDES = 2;

const buttonsPaddingWithIcon = css`
  padding-top: 7px;
  padding-bottom: 7px;
  align-items: center;
`;

const buttonsPaddingWithIconReverse = css`
  padding-top: 7px;
  padding-bottom: 7px;
  align-items: center;

  svg {
    transform: rotate(180deg);
  }
`;

const Rules = () => {
  const { ref, next, prev } = useCarousel(TOTAL_SLIDES);

  const iconMoreButton = {
    url: 'src/assets/icons/icons_sprite.svg#icon-arrow',
    width: 44,
    height: 44,
  };

  const iconBackButton = {
    url: 'src/assets/icons/icons_sprite.svg#icon-arrow',
    width: 44,
    height: 44,
    isLeft: true,
  };

  return (
    <StCarousel width={636}>
      <StCarouselBoxContainer ref={ref}>
        <StCarouselBox width={636} height={400}>
          <StFlex css={width100Percent} justifyContent="space-between">
            {cards.map((card, id) => (
              <Card
                key={`card-${id}`}
                src={card.src}
                alt={card.alt}
                text={card.text}
              />
            ))}
          </StFlex>

          <Button
            onClick={next}
            svg={iconMoreButton}
            css={buttonsPaddingWithIconReverse}
            text="Подробнее"
            disignType="alternate"
          />
        </StCarouselBox>

        <StCarouselBox width={636} height={400}>
          <RulesInfo />

          <Button
            onClick={prev}
            svg={iconBackButton}
            css={buttonsPaddingWithIcon}
            text="Назад"
            disignType="alternate"
          />
        </StCarouselBox>
      </StCarouselBoxContainer>
    </StCarousel>
  );
};

export default Rules;
