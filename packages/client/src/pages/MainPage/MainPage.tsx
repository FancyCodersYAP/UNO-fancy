import { FC } from 'react';
import Logo from 'components/Logo';
import Button from 'components/Button';
import { StFlexColumnDirection } from 'styles/global';

const MainPage: FC = () => (
  <>
    <StFlexColumnDirection gap={40}>
      <Logo size={350} />
      <Button text="Начать игру" size="large" />
      <Button text="Правила" disignType="alternate" />
    </StFlexColumnDirection>
  </>
);
export default MainPage;
