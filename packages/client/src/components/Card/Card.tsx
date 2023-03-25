import { StTextContainer } from 'styles/global';
import { StCard, StCardImg } from './style';
import { css } from 'styled-components';

interface CardType {
  src: string;
  alt: string;
  text: string;
}

const fontStyle = css`
  font-size: 17px;
  line-height: 24px;
  margin: 0;
`;

const Card = (props: CardType) => {
  const { src, alt, text } = props;

  return (
    <StCard>
      <StCardImg src={src} alt={alt} />
      <StTextContainer css={fontStyle} textAlign="center">
        {text}
      </StTextContainer>
    </StCard>
  );
};

export default Card;
