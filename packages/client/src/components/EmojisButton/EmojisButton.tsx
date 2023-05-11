import {
  StEmojiWrapper,
  StButtonEmoji,
  StSmileIcon,
  StEmojiContainer,
  StEmojiItem,
} from './style';
import { SetStateAction, Dispatch } from 'react';
import { emojiArray } from 'data/emojis';

interface EmojisButtonType {
  handleEmoji: () => void;
  isOpen: boolean;
  setText: Dispatch<SetStateAction<string>>;
}

const EmojisButton = ({ handleEmoji, isOpen, setText }: EmojisButtonType) => {
  const clickOnEmoji = (evt: React.SyntheticEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    textarea.value = textarea.value + target.textContent;
    setText(textarea.value);
  };

  return (
    <StEmojiWrapper>
      <StButtonEmoji onClick={handleEmoji}>
        <StSmileIcon>
          <use href="/assets/icons/icons_sprite.svg#icon-smile"></use>
        </StSmileIcon>
      </StButtonEmoji>

      {isOpen && (
        <StEmojiContainer>
          {emojiArray.map((el, index) => (
            <StEmojiItem key={index + 1} onClick={clickOnEmoji}>
              {el}
            </StEmojiItem>
          ))}
        </StEmojiContainer>
      )}
    </StEmojiWrapper>
  );
};

export default EmojisButton;
