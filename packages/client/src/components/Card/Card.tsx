import { StTextContainer } from 'styles/global';
import { StCard, StCardImg } from './style';

interface CardType {
  src: string;
  alt: string;
  text: string;
}

const Card = (props: CardType) => {
  const { src, alt, text } = props;

  return (
    <StCard data-testid="card">
      <StCardImg src={src} alt={alt} />
      <StTextContainer fontSize={17} lineHeight={24} textAlign="center">
        {text}
      </StTextContainer>
    </StCard>
  );
};

export default Card;
