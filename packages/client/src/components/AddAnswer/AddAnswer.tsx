import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicTextarea } from './style';

interface AddAnswerType {
  handleCloseModal: () => void;
}

const AddAnswer = (props: AddAnswerType) => {
  const { handleCloseModal } = props;

  const submitNewTopic = (evt: SubmitEvent) => {
    evt.preventDefault();
    const topicAnswer = document.querySelector(
      '[name="topic_answer"]'
    ) as HTMLTextAreaElement;

    // временный код для проверки
    console.log(`Текст сообщения: ${topicAnswer.value}`);
  };

  return (
    <>
      <form action="">
        <StTopicLabel htmlFor="topic_answer">Текст сообщения</StTopicLabel>
        <StTopicTextarea
          name="topic_answer"
          id="topic_answer"
          placeholder="Текст сообщения"></StTopicTextarea>
        <StFlex>
          {/* не знаю как правильно убрать ошибку */}
          <Button text="Отправить" onClick={submitNewTopic} />
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
