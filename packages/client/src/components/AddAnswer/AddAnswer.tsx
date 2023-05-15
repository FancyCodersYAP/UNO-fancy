import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StMessageForm, StAnswerWrapper, StAnswerAll, StAnswer } from './style';
import { css } from 'styled-components';
import { addMessageConfig } from 'pages/configs';
import { FieldValues } from 'react-hook-form';
import { buttonStyle } from 'components/AddTopic/AddTopic';
import stringShorten from 'utils/stringShorten';
import { fetchForumMessagePost } from 'store/Forum/messageAction';
import { useAppDispatch } from 'hooks/redux';
import { AddAnswerModalUserInfo } from 'types';

const MAX_ANSWER_LENGTH = 20;

interface AddAnswerType {
  topicId: number;
  feedRef: React.RefObject<HTMLDivElement>;
  handleCloseModal: () => void;
  userInfo?: AddAnswerModalUserInfo;
}

const buttonsWrapperStyle = css`
  margin-top: 32px;
`;

export interface MessageFormParams extends FieldValues {
  content: string;
  topic_id: number;
}

const AddAnswer = ({
  handleCloseModal,
  userInfo,
  topicId,
  feedRef,
}: AddAnswerType) => {
  const dispatch = useAppDispatch();

  const submitNewTopicMessage = (data: MessageFormParams): void => {
    if (userInfo) {
      data.id_head_answer = userInfo.id;
    }
    data.topic_id = topicId;

    dispatch(fetchForumMessagePost(data)).then(action => {
      if ('error' in action && action.error) return;
      handleCloseModal();
      const feedScroll = feedRef.current?.scrollHeight || 0;
      feedRef.current?.scroll(0, feedScroll);
    });
  };

  const footer = (
    <StFlex css={buttonsWrapperStyle} justifyContent="space-between">
      <Button
        css={buttonStyle}
        text="Отправить"
        type="submit"
        disignType="primary"
      />
      <Button
        css={buttonStyle}
        text="Отмена"
        type="reset"
        disignType="alternate"
        onClick={handleCloseModal}
      />
    </StFlex>
  );

  return (
    <>
      <StAnswerWrapper>
        {userInfo ? (
          <StAnswer>
            {userInfo.user}: "
            {stringShorten(userInfo.message, MAX_ANSWER_LENGTH)}"
          </StAnswer>
        ) : (
          <StAnswerAll>Всем:</StAnswerAll>
        )}
      </StAnswerWrapper>

      <StMessageForm
        fields={addMessageConfig}
        handleFormSubmit={submitNewTopicMessage}
        footer={footer}
      />
    </>
  );
};

export default AddAnswer;
