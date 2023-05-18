import { StFlex } from 'styles/global';
import {
  StDeleteTopicForm,
  StDeleteTopicWrapper,
  StTopicName,
  StDeleteError,
  StButton,
} from './style';
import { fetchForumTopicDel } from 'store/Forum/forumActions';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { forumErrorReset } from 'store/Forum/forumSlice';

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
        <StButton text="Удалить" type="submit" />
        <StButton
          onClick={handleCloseModal}
          text="Отмена"
          disignType="alternate"
        />
      </StFlex>
    </StDeleteTopicForm>
  );
};

export default DeleteTopic;
