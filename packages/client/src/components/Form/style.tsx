import styled from 'styled-components';
import * as COLORS from 'styles/variables/colors'

export const StFormTitle = styled.div`
  color: ${COLORS.MAIN_TEXT_COLOR};
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
`;

export const StFormSubtitle = styled.div`
  color: ${COLORS.MAIN_TEXT_COLOR};
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  line-height: 1.2;
`;

export const StForm = styled.form`
  width: 400px;
  background-color: ${COLORS.PRIMARY_PREVIEW_COLOR};
  padding: 40px 60px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  box-sizing: border-box;
`;

export const StFormFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
