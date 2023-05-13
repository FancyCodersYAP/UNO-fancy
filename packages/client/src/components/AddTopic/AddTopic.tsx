import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicForm } from './style';
import { css } from 'styled-components';
import { addTopicConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';

export const buttonStyle = css`
  width: 200px;
  margin: 0;
`;

const buttonsWrapperStyle = css`
  margin-top: 40px;
`;

export interface TopicFormParams extends FieldValues {
  name: string;
  description: string;
}

interface AddTopicType {
  handleCloseModal: () => void;
}

const AddTopic = ({ handleCloseModal }: AddTopicType) => {
  const submitNewTopic = (data: TopicFormParams): void => {
    // временный код для проверки данных
    console.log(data);
    handleCloseModal();
  };

  const footer = (
    <StFlex css={buttonsWrapperStyle} justifyContent="space-between">
      <Button
        css={buttonStyle}
        text="Создать"
        type="submit"
        disignType="primary"
      />
      <Button
        css={buttonStyle}
        type="reset"
        text="Отмена"
        disignType="alternate"
        onClick={handleCloseModal}
      />
    </StFlex>
  );

  return (
    <StTopicForm
      fields={addTopicConfig}
      handleFormSubmit={submitNewTopic}
      footer={footer}
    />
  );
};

export default AddTopic;
