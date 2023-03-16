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
    <StCard>
      <StCardImg src={src} alt={alt} />
      <StTextContainer>{text}</StTextContainer>
    </StCard>
  );
};

export default Card;
