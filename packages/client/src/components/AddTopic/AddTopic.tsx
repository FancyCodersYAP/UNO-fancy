import {
  StTopicForm,
  StFlexButtonsWrapperStyle,
  StButtonAddTopic,
} from './style';
import { addTopicConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchForumTopicPost } from 'store/Forum/forumActions';
import { forumErrorReset } from '../../store/Forum/forumSlice';

export interface TopicFormParams extends FieldValues {
  name: string;
  description: string;
}

export interface MessageFormParams extends FieldValues {
  content: string;
  topic_id: number;
}

interface AddTopicType {
  handleCloseModal: () => void;
}

const AddTopic = (props: AddTopicType) => {
  const { handleCloseModal } = props;
  const dispatch = useAppDispatch();

  const submitNewTopic = (data: TopicFormParams): void => {
    dispatch(fetchForumTopicPost(data)).then(action => {
      if ('error' in action && action.error) return;
      handleCloseModal();
    });
  };

  const forumError = useAppSelector(state => state.FORUM.error);

  const errorCancel = () => {
    if (forumError) dispatch(forumErrorReset());
  };

  const footer = (
    <StFlexButtonsWrapperStyle justifyContent="space-between">
      <StButtonAddTopic text="Создать" type="submit" disignType="primary" />
      <StButtonAddTopic
        type="reset"
        text="Отмена"
        disignType="alternate"
        onClick={handleCloseModal}
      />
    </StFlexButtonsWrapperStyle>
  );

  return (
    <StTopicForm
      fields={addTopicConfig}
      handleFormSubmit={submitNewTopic}
      footer={footer}
      error={forumError}
      errorReset={errorCancel}
    />
  );
};

export default AddTopic;
