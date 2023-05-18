import Card from 'components/Card/Card';
import useCarousel from 'hooks/useCarousel';
import RulesInfo from './RulesInfo';
import {
  StFlex,
  StCarousel,
  StCarouselBox,
  width100Percent,
} from 'styles/global';
import { cardsWithRules } from 'data/cardsWithRules';
import { StMoreButton, StBackButton } from './style';

const TOTAL_SLIDES = 2;

const Rules = () => {
  const { ref, goNext, goPrev } = useCarousel(TOTAL_SLIDES);

  const iconMoreButton = {
    url: '/assets/icons/icons_sprite.svg#icon-arrow',
    width: 14,
    height: 23,
  };

  const iconBackButton = {
    ...iconMoreButton,
    isLeft: true,
  };

  return (
    <StCarousel>
      <StFlex ref={ref}>
        <StCarouselBox>
          <StFlex css={width100Percent} justifyContent="space-between">
            {cardsWithRules.map((card, id) => (
              <Card
                key={`card-${id}`}
                src={card.src}
                alt={card.alt}
                text={card.text}
              />
            ))}
          </StFlex>

          <StMoreButton
            onClick={goNext}
            svg={iconMoreButton}
            text="Подробнее"
            disignType="alternate"
          />
        </StCarouselBox>

        <StCarouselBox>
          <RulesInfo />

          <StBackButton
            onClick={goPrev}
            svg={iconBackButton}
            text="Назад"
            disignType="alternate"
          />
        </StCarouselBox>
      </StFlex>
    </StCarousel>
  );
};

export default Rules;
