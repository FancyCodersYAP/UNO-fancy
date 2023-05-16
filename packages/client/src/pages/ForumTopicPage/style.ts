import styled, { css } from 'styled-components';
import { customScrollbar } from 'styles/global';
import {
  BACKGROUND_COLOR_OPACITY_LIGHT,
  COLOR_ELEMENT_CONTRAST_REVERSE,
} from 'styles/variables/colors-const';
import { BORDER_RADIUS_SIZE } from 'styles/variables/styleConstants';
import { AvatarType } from 'types';
import { StButton } from 'components/Button/style';
import { BOX_SHADOW } from 'styles/variables/styleConstants';
import { API_ENDPOINTS } from '../../store/constants';

export const stBoardStyle = css`
  min-width: 1128px;
`;

export const lineHeight130Percent = css`
  line-height: 130%;
`;

const containerStyle = css`
  display: grid;
  border-radius: ${BORDER_RADIUS_SIZE};
  margin-bottom: 12px;
  background: ${props => props.theme?.BACKGROUND_COLOR_TOPIC_MESSAGE};
  box-shadow: ${BOX_SHADOW};
`;

export const StTopic = styled.div`
  ${containerStyle}
  grid-template-columns: 144px 1fr;
  min-height: 150px;
  position: relative;
`;

export const StUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme?.BACKGROUND_COLOR_TOPIC};
  border-radius: ${BORDER_RADIUS_SIZE} 0 0 ${BORDER_RADIUS_SIZE};
  padding: 12px 8px 8px;
  border: 1px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
`;

export const StUserAvatar = styled.div<AvatarType>`
  position: relative;
  padding: 45px;
  //height: 90px;
  background: ${({ image }) =>
    `url(${
      (image && API_ENDPOINTS.resources + image) ||
      '/assets/icons/default-avatar.svg'
    }) center no-repeat`};
  background-color: ${props => props?.theme.COLOR_BACKGROUND_SECONDARY};
  background-size: ${({ image }) => (image ? 'cover' : 'auto')};
  border-radius: 50%;
  margin-bottom: 5px;
  border: 1px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
`;

export const StUserInfo = styled.div`
  width: min-content;
  margin-left: 10px;
`;

export const StUserName = styled.p`
  font-size: 15px;
  line-height: 15px;
  color: ${COLOR_ELEMENT_CONTRAST_REVERSE};
  margin-bottom: 5px;
  text-align: center;
`;

export const StUserRank = styled.span`
  font-size: 10px;
  line-height: 15px;
  color: ${COLOR_ELEMENT_CONTRAST_REVERSE};
  opacity: 0.8;
  text-align: center;
  display: block;
`;

export const StTopicWrapper = styled.div`
  border: 1px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  border-left: none;
  border-top: none;
  border-radius: 0 ${BORDER_RADIUS_SIZE} ${BORDER_RADIUS_SIZE} 0;
`;

export const StTopicName = styled.h3`
  font-size: 15px;
  font-weight: 400;
  ${lineHeight130Percent}
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const StTopicNameContainer = styled.div`
  height: 20px;
  box-sizing: initial;
  margin: -0px;
  text-align: center;
  border-right: 1px solid
    ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  padding: 5px 0;
  width: 100%;
  background: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  border-radius: 0 20px 0 0;
`;

export const StTopicText = styled.p`
  font-size: 18px;
  ${lineHeight130Percent}
  color: ${COLOR_ELEMENT_CONTRAST_REVERSE};
  position: relative;
  padding: 25px 15px;
  min-height: 121px;
`;

export const StTopicDate = styled.span`
  font-size: 10px;
  ${lineHeight130Percent}
  color: ${COLOR_ELEMENT_CONTRAST_REVERSE};
  position: absolute;
  bottom: 5px;
  right: 23px;
  opacity: 0.8;
`;

export const StTopicDiscussion = styled.div`
  ${customScrollbar}
  overflow-y: auto;
  background: ${BACKGROUND_COLOR_OPACITY_LIGHT};
  border-radius: ${BORDER_RADIUS_SIZE} 10px 10px ${BORDER_RADIUS_SIZE};
  padding: 10px;
  margin-bottom: 28px;
  max-height: 400px;
`;

export const StMessage = styled.article`
  ${containerStyle}
  grid-template-columns: 134px 1fr;
  min-height: 78px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StMessageAvatar = styled(StUserAvatar)`
  padding: 25px;
  //width: 50px;
  //height: 50px;
  //margin-right: 12px;
  margin-bottom: 0;
  //background-size: 20px;
`;

export const StMessageWrapper = styled.div`
  padding: 10px 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 0 20px 20px 0;
  border: 1px solid rgba(129, 113, 74, 0.9);
  border-left: none;
`;

export const StMessageText = styled.p`
  font-size: 15px;
  ${lineHeight130Percent}
  color: ${COLOR_ELEMENT_CONTRAST_REVERSE};
  max-width: 775px;
  padding-bottom: 10px;
`;

export const StAnswer = styled.a`
  font-size: 13px;
  color: ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  border-left: 5px solid ${props => props.theme?.BACKGROUND_COLOR_FORUM_PRIMARY};
  padding-left: 5px;
  margin-bottom: 10px;
  display: block;

  &:hover {
    text-shadow: 1px 1px 1px rgb(0 0 0 / 20%);
  }
`;

export const StButtonBackIcon = styled.svg`
  width: 10px;
  height: 25px;
  margin-right: 5px;
  filter: drop-shadow(${BOX_SHADOW});
`;

export const StButtonBackToForum = styled(StButton)`
  position: absolute;
  top: -42px;
  left: 0;
  z-index: 100;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-shadow: ${BOX_SHADOW};
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  background-color: initial;
  border: none;
  box-shadow: none;

  svg {
    filter: drop-shadow(${BOX_SHADOW});
  }

  &:hover {
    text-shadow: 0px 4px 4px rgb(0 0 0 / 40%);

    svg {
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
    }
  }
`;

export const StTopicDiscussionEmpty = styled.p`
  font-size: 17px;
  line-height: 15px;
  color: ${props => props.theme?.COLOR_TEXT_PRIMARY};
  margin: 40px 0;
  text-align: center;
`;
