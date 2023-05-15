import Button from 'components/Button';
import { StFlex } from 'styles/global';
import {
  StDeleteTopicContainer,
  StDeleteTopicWrapper,
  StTopicName,
  StDeleteError,
} from './style';
import { css } from 'styled-components';
import { fetchForumTopicDel } from 'store/Forum/forumActions';
import { useAppDispatch } from 'hooks/redux';
import { errorReset } from 'store/User/userSlice';
import { userState } from 'hooks/userState';

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

  const { userError } = userState();

  const errorCancel = () => {
    if (userError) dispatch(errorReset());
  };

  const handelDeleteTopic = (evt: React.SyntheticEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(fetchForumTopicDel(String(topicInfo.id))).then(action => {
      if ('error' in action && action.error) return;
      handleCloseModal();
    });
  };

  return (
    <StDeleteTopicContainer onSubmit={handelDeleteTopic} onClick={errorCancel}>
      <StDeleteTopicWrapper>
        <StTopicName>{topicInfo.name}</StTopicName>

        <StDeleteError>{userError}</StDeleteError>
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
    </StDeleteTopicContainer>
  );
};

export default DeleteTopic;
