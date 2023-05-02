import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicTextarea } from './style';
import { fetchForumMessagePost } from 'store/Forum/messageAction';
import { useAppDispatch } from 'hooks/redux';

interface AddAnswerType {
  topicId: number;
  handleCloseModal: () => void;
}

const AddAnswer = (props: AddAnswerType) => {
  const { handleCloseModal, topicId } = props;
  const dispatch = useAppDispatch();

  const submitNewTopic = (evt: React.FormEvent) => {
    if (evt.target && evt.target.topic_answer.value) {
      const content = evt.target.topic_answer.value;
      const sendData = {
        content,
        topic_id: topicId,
      };
      dispatch(fetchForumMessagePost(sendData));

      console.log(sendData);
      handleCloseModal();
    }
  };

  return (
    <>
      <form onSubmit={submitNewTopic}>
        <StTopicLabel htmlFor="topic_answer">Текст сообщения</StTopicLabel>
        <StTopicTextarea
          name="topic_answer"
          id="topic_answer"
          placeholder="Текст сообщения"
          required></StTopicTextarea>
        <StFlex>
          <Button text="Отправить" />
          <Button
            text="Отмена"
            disignType="alternate"
            onClick={handleCloseModal}
          />
        </StFlex>
      </form>
    </>
  );
};

export default AddAnswer;
