import styled from 'styled-components';

export const StSettingsRadios = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const StSettingsRadioWrapper = styled.div``;

export const StSettingsInput = styled.input``;

export const StSettingsLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const StSettingsImgs = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  padding: 22px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25),
    inset 4px 4px 4px rgba(130, 128, 128, 0.25);
  border-radius: 20px;
`;

export const StSettingsImg = styled.img`
  width: 75px;
  height: 75px;

  &:nth-child(2) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
