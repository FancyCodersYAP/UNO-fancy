import Button from 'components/Button';
import { StFlex } from 'styles/global';
import {
  StDeleteTopicForm,
  StDeleteTopicWrapper,
  StTopicName,
  StDeleteError,
} from './style';
import { css } from 'styled-components';
import { fetchForumTopicDel } from 'store/Forum/forumActions';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { forumErrorReset } from 'store/Forum/forumSlice';

const buttonStyle = css`
  width: 200px;
  margin: 0;
`;

type topicInfoType = {
  id: number;
  name: string;
};

interface DeleteTopicType {
  handleCloseModal: () => void;
  topicInfo: topicInfoType;
}

const DeleteTopic = ({ handleCloseModal, topicInfo }: DeleteTopicType) => {
  const dispatch = useAppDispatch();

  const topicDelError = useAppSelector(state => state.FORUM.error);

  const errorCancel = () => {
    if (topicDelError) dispatch(forumErrorReset());
  };

  const handelDeleteTopic = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(fetchForumTopicDel(String(topicInfo.id))).then(action => {
      if ('error' in action && action.error) return;
      handleCloseModal();
    });
  };

  return (
    <StDeleteTopicForm onSubmit={handelDeleteTopic} onClick={errorCancel}>
      <StDeleteTopicWrapper>
        <StTopicName>{topicInfo.name}</StTopicName>

        <StDeleteError>{topicDelError}</StDeleteError>
      </StDeleteTopicWrapper>

      <StFlex justifyContent="space-between">
        <Button css={buttonStyle} text="Удалить" type="submit" />
        <Button
          onClick={handleCloseModal}
          css={buttonStyle}
          text="Отмена"
          disignType="alternate"
        />
      </StFlex>
    </StDeleteTopicForm>
  );
};

export default DeleteTopic;
