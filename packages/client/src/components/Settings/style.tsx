import styled from 'styled-components';
import { BACKGROUND_LAYOUT_COLOR, MAIN_TEXT_COLOR, PRIMARY_PREVIEW_COLOR } from 'styles/variables/colors';

export const StSettings = styled.section`
  background-color: ${BACKGROUND_LAYOUT_COLOR};
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const StSettingsWrapper = styled.div`
  background-color: ${PRIMARY_PREVIEW_COLOR};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  min-width: 600px;
`;

export const StSettingsTitle = styled.h3`
  color: ${MAIN_TEXT_COLOR};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;
`;

export const StSettingsForm = styled.form`
  
`;

export const StSettingsRadios = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const StSettingsRadioWrapper = styled.div`
  
`;

export const StSettingsInput = styled.input`
  
`;

export const StSettingsLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  
`;

export const StSettingsImg = styled.img`
  max-width: 75px;
  max-height: 75px;
  width: 75px;
  height: 75px;
  margin: 0 auto 10px;
`;

export const StSettingsText = styled.span`
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
  color: ${MAIN_TEXT_COLOR};

  &:hover {
    opacity: 0.6;
  }
`;

export const StSettingsCheckboxWrapper = styled.div`
  display: block;
  max-width: min-content;
  margin: 0 auto 50px;
`;

export const StSettingsButton = styled.button`
  background-color: #00c0d2;
  border-radius: 12px;
  border: 0;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  text-align: center;
  min-width: 150px;
  margin-left: auto;
  display: block;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(130, 128, 128, 0.25);
`;

