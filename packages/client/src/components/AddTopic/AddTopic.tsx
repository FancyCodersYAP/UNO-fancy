import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicForm } from './style';
import { css } from 'styled-components';
import { addTopicConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import getCurrentDate from 'utils/getCurrentDate';
import { userState } from 'hooks/userState';

const buttonStyle = css`
  width: 200px;
  margin: 0;
`;

const buttonsWrapperStyle = css`
  margin-top: 40px;
`;

export interface TopicFormParams extends FieldValues {
  topic_name: string;
  topic_message: string;
}

interface AddTopicType {
  handleCloseModal: () => void;
}

const AddTopic = (props: AddTopicType) => {
  const { handleCloseModal } = props;
  const { user } = userState();

  const handleLogin = (data: TopicFormParams): void => {
    data.topic_date = getCurrentDate();
    data.author = user?.first_name;
    console.log(data);
  };

  const footer = (
    <StFlex css={buttonsWrapperStyle} justifyContent="space-between">
      <Button css={buttonStyle} text="Создать" type="submit" />
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
      <StTopicForm
        fields={addTopicConfig}
        handleFormSubmit={handleLogin}
        footer={footer}
      />
    </>
  );
};

export default AddTopic;
