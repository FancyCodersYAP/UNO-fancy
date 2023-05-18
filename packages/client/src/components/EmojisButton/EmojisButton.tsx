import {
  StEmojiWrapper,
  StButtonEmoji,
  StSmileIcon,
  StEmojiContainer,
  StEmojiItem,
  StEmojiList,
} from './style';
import { SetStateAction, Dispatch } from 'react';
import { emojiArray } from 'data/emojis';
import { MutableRefObject } from 'react';

interface EmojisButtonType {
  handleEmoji: () => void;
  isOpen: boolean;
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>;
  setTextareaLength: Dispatch<SetStateAction<number>>;
}

const EmojisButton = ({
  handleEmoji,
  isOpen,
  textAreaRef,
  setTextareaLength,
}: EmojisButtonType) => {
  const clickOnEmoji = (evt: React.SyntheticEvent<HTMLElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
      if (textAreaRef.current.value.length >= 255) return;
      const target = evt.target as HTMLElement;
      textAreaRef.current.value =
        textAreaRef.current.value + target.textContent;
      setTextareaLength(textAreaRef.current.value.length);
    }
  };

  return (
    <StEmojiWrapper>
      <StButtonEmoji type="button" onClick={handleEmoji}>
        <StSmileIcon>
          <use href="/assets/icons/icons_sprite.svg#icon-smile"></use>
        </StSmileIcon>
      </StButtonEmoji>

      {isOpen && (
        <StEmojiContainer>
          <StEmojiList>
            {emojiArray.map((el, index) => (
              <StEmojiItem key={index + 1} onClick={clickOnEmoji}>
                {el}
              </StEmojiItem>
            ))}
          </StEmojiList>
        </StEmojiContainer>
      )}
    </StEmojiWrapper>
  );
};

export default EmojisButton;
