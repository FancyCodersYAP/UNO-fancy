import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicTextarea } from './style';

interface AddAnswerType {
  handleCloseModal: () => void;
}

const AddAnswer = (props: AddAnswerType) => {
  const { handleCloseModal } = props;

  const submitNewTopic = (evt: React.FormEvent) => {
    evt.preventDefault();
    const topicAnswer = document.querySelector(
      '[name="topic_answer"]'
    ) as HTMLTextAreaElement;

    // временный код для проверки
    console.log(`Текст сообщения: ${topicAnswer.value}`);
    handleCloseModal();
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
