import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StMessageForm } from './style';
import { css } from 'styled-components';
import { addMessageConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { buttonStyle } from 'components/AddTopic/AddTopic';

interface AddAnswerType {
  handleCloseModal: () => void;
}

const buttonsWrapperStyle = css`
  margin-top: 90px;
`;

export interface MessageFormParams extends FieldValues {
  content: string;
}

const AddAnswer = ({ handleCloseModal }: AddAnswerType) => {
  const submitNewTopicMessage = (data: MessageFormParams): void => {
    // временный код для проверки данных
    console.log(data);
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
      <StMessageForm
        fields={addMessageConfig}
        handleFormSubmit={submitNewTopicMessage}
        footer={footer}
      />
    </>
  );
};

export default AddAnswer;
