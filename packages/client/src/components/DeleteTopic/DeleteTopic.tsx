import Button from 'components/Button';
import { StFlex } from 'styles/global';
import { StTopicName } from './style';
import { css } from 'styled-components';

const buttonStyle = css`
  width: 200px;
  margin: 0;
`;

type topicInfoType = {
  id: number;
  topic: string;
};

interface DeleteTopicType {
  handleCloseModal: () => void;
  topicInfo: topicInfoType;
}

const DeleteTopic = ({ handleCloseModal, topicInfo }: DeleteTopicType) => {
  const handelDeleteTopic = () => {
    console.log('Удаленная тема: ' + topicInfo.id);
  };

  return (
    <>
      <StTopicName>{topicInfo.topic}</StTopicName>
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
