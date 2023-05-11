import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StMessageForm, StAnswerAll, StAnswer } from './style';
import { css } from 'styled-components';
import { addMessageConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { buttonStyle } from 'components/AddTopic/AddTopic';
import stringShorten from 'utils/stringShorten';
import useModal from 'hooks/useModal';
import EmojisButton from 'components/EmojisButton/EmojisButton';
import { useState } from 'react';

const MAX_ANSWER_LENGTH = 20;

export type UserInfo = {
  id: number;
  author: string;
  message: string;
};

interface AddAnswerType {
  handleCloseTopic: () => void;
  userInfo?: UserInfo;
}

const buttonsWrapperStyle = css`
  margin-top: 90px;
`;

export interface MessageFormParams extends FieldValues {
  content: string;
}

const AddAnswer = ({ handleCloseTopic, userInfo }: AddAnswerType) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [text, setText] = useState('');

  const submitNewTopicMessage = (data: MessageFormParams): void => {
    // временный код для проверки данных
    if (userInfo) {
      data.message_id = userInfo.id;
    }
    data.content = text;
    console.log(data);

    setText('');
  };

  const closeModal = () => {
    handleCloseModal();
    handleCloseTopic();
  };

  const handleEmoji = () => {
    if (isOpen) {
      handleCloseModal();
    } else {
      handleOpenModal();
    }

    setText((document.querySelector('textarea') as HTMLTextAreaElement).value);
  };

  const footer = (
    <StFlex css={buttonsWrapperStyle} justifyContent="space-between">
      <Button
        css={buttonStyle}
        text="Отправить"
        type="submit"
        disignType="primary"
      />
      <Button
        css={buttonStyle}
        text="Отмена"
        disignType="alternate"
        onClick={closeModal}
      />
    </StFlex>
  );

  return (
    <>
      {userInfo ? (
        <StAnswer>
          {userInfo.author}: "
          {stringShorten(userInfo.message, MAX_ANSWER_LENGTH)}"
        </StAnswer>
      ) : (
        <StAnswerAll>Всем:</StAnswerAll>
      )}

      <EmojisButton
        handleEmoji={handleEmoji}
        isOpen={isOpen}
        setText={setText}
      />

      <StMessageForm
        fields={addMessageConfig}
        handleFormSubmit={submitNewTopicMessage}
        footer={footer}
      />
    </>
  );
};

export default AddAnswer;
