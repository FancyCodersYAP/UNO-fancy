import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StDeleteTopicWrapper, StTopicName, StDeleteError } from './style';
import { css } from 'styled-components';
import { fetchForumTopicDel } from 'store/Forum/forumActions';
import { useAppDispatch } from 'hooks/redux';
import { useState } from 'react';

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

  const [deleteError, setDeleteError] = useState(false);

  const handelDeleteTopic = () => {
    dispatch(fetchForumTopicDel(String(topicInfo.id))).then(action => {
      if ('error' in action && action.error) {
        setDeleteError(true);
        return;
      }
      handleCloseModal();
    });
  };

  return (
    <>
      <StDeleteTopicWrapper>
        <StTopicName>{topicInfo.name}</StTopicName>

        {deleteError && (
          <StDeleteError>
            Вы не можете удалить эту тему, т.к. она Вам не пренадлежит!
          </StDeleteError>
        )}
      </StDeleteTopicWrapper>

      <StFlex justifyContent="space-between">
        <Button
          onClick={handelDeleteTopic}
          css={buttonStyle}
          text="Удалить"
          disignType="primary"
        />
        <Button
          onClick={handleCloseModal}
          css={buttonStyle}
          text="Отмена"
          disignType="alternate"
        />
      </StFlex>
    </>
  );
};

export default DeleteTopic;
