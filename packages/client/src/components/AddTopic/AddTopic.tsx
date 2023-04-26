import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicLabel, StTopicInput, StTopicTextarea } from './style';

interface AddTopicType {
  handleCloseModal: () => void;
}

const AddTopic = (props: AddTopicType) => {
  const { handleCloseModal } = props;

  const submitNewTopic = (evt: React.FormEvent) => {
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
      <form action="" onSubmit={submitNewTopic}>
        <StTopicLabel htmlFor="topic_name">Название темы</StTopicLabel>
        <StTopicInput
          type="text"
          id="topic_name"
          name="topic_name"
          placeholder="Название темы"
          autoComplete="off"
          required
        />

        <StTopicLabel htmlFor="topic_message">Описание темы</StTopicLabel>
        <StTopicTextarea
          name="topic_message"
          id="topic_message"
          placeholder="Описание темы"
          required></StTopicTextarea>
        <StFlex>
          <Button text="Создать" type="submit" />
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
