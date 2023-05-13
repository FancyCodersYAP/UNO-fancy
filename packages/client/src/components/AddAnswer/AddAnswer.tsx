import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicTextarea } from './style';
import { fetchForumMessagePost } from 'store/Forum/messageAction';
import { useAppDispatch } from 'hooks/redux';

interface AddAnswerType {
  topicId: number;
  feedRef: React.RefObject<HTMLDivElement>;
  handleCloseModal: () => void;
}

const AddAnswer = (props: AddAnswerType) => {
  const { handleCloseModal, topicId } = props;
  const dispatch = useAppDispatch();

  const submitNewTopic = (evt: React.FormEvent) => {
    evt.preventDefault();
    /**код по определению элемента временный будет замена из другой ветки**/
    //@ts-ignore
    if (evt.target.topic_answer.value) {
      //@ts-ignore
      const content = evt.target.topic_answer.value;
      const sendData = {
        content,
        topic_id: topicId,
      };
      dispatch(fetchForumMessagePost(sendData)).then(action => {
        if ('error' in action && action.error) return;
        handleCloseModal();
        //после отправки сообщения мы получаем его в отвтвете и прокручивает скрол вниз
        const feedScroll = props.feedRef.current?.scrollHeight || 0;
        props.feedRef.current?.scroll(0, feedScroll);
      });
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
