import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicForm } from './style';
import { css } from 'styled-components';
import { addTopicConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/redux';
import { userState } from 'hooks/userState';
import { fetchForumTopicPost } from '../../store/Forum/forumActions';
const buttonStyle = css`
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

const AddTopic = (props: AddTopicType) => {
  const { handleCloseModal } = props;
  const dispatch = useAppDispatch();

  const handleLogin = (data: TopicFormParams): void => {
    dispatch(fetchForumTopicPost(data));
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
