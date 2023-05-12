import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StMessageForm, StAnswerWrapper, StAnswerAll, StAnswer } from './style';
import { css } from 'styled-components';
import { addMessageConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { buttonStyle } from 'components/AddTopic/AddTopic';
import stringShorten from 'utils/stringShorten';

const MAX_ANSWER_LENGTH = 20;

export type UserInfo = {
  id: number;
  author: string;
  message: string;
};

interface AddAnswerType {
  handleCloseModal: () => void;
  userInfo?: UserInfo;
}

const buttonsWrapperStyle = css`
  margin-top: 32px;
`;

export interface MessageFormParams extends FieldValues {
  content: string;
}

const AddAnswer = ({ handleCloseModal, userInfo }: AddAnswerType) => {
  const submitNewTopicMessage = (data: MessageFormParams): void => {
    if (userInfo) {
      data.message_id = userInfo.id;
    }

    const textValue = localStorage.getItem('textareaValue');
    if (textValue) {
      data.content = textValue;
    }

    // временный код для проверки данных
    console.log(data);

    handleCloseModal();
    localStorage.removeItem('textareaValue');
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
        onClick={handleCloseModal}
      />
    </StFlex>
  );

  return (
    <>
      <StAnswerWrapper>
        {userInfo ? (
          <StAnswer>
            {userInfo.author}: "
            {stringShorten(userInfo.message, MAX_ANSWER_LENGTH)}"
          </StAnswer>
        ) : (
          <StAnswerAll>Всем:</StAnswerAll>
        )}
      </StAnswerWrapper>

      <StMessageForm
        fields={addMessageConfig}
        handleFormSubmit={submitNewTopicMessage}
        footer={footer}
      />
    </>
  );
};

export default AddAnswer;
