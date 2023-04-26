import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicInput, StTopicTextarea } from './style';

interface AddTopicType {
  handleCloseModal: () => void;
}

const AddTopic = (props: AddTopicType) => {
  const { handleCloseModal } = props;

  const submitNewTopic = (evt: SubmitEvent) => {
    evt.preventDefault();
    const topicName = document.querySelector(
      '[name="topic_name"]'
    ) as HTMLInputElement;
    const topicMessage = document.querySelector(
      '[name="topic_message"]'
    ) as HTMLTextAreaElement;

    // временный код для проверки
    console.log(
      `Название темы: ${topicName.value}`,
      `Описание темы: ${topicMessage.value}`
    );
  };

  return (
    <>
      <form action="">
        <StTopicLabel htmlFor="topic_name">Название темы</StTopicLabel>
        <StTopicInput
          type="text"
          id="topic_name"
          name="topic_name"
          placeholder="Название темы"
        />

        <StTopicLabel htmlFor="topic_message">Описание темы</StTopicLabel>
        <StTopicTextarea
          name="topic_message"
          id="topic_message"
          placeholder="Описание темы"></StTopicTextarea>
        <StFlex>
          {/* не знаю как правильно убрать ошибку */}
          {/* <Button text="Создать" onClick={submitNewTopic} /> */}
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

export default AddTopic;
