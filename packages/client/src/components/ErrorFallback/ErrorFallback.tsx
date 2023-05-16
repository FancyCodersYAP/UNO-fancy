import Button from 'components/Button/Button';
import { StTextContainer } from 'styles/global';
import { StErrorFallbackContainer, StErrorMessage } from './style';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <StErrorFallbackContainer role="alert">
      <StTextContainer fontSize={20} textAlign={'center'}>
        Что-то пошло не так :(
      </StTextContainer>
      <StErrorMessage>{error.message}</StErrorMessage>
      <Button text={'Попробовать снова'} onClick={resetErrorBoundary}></Button>
    </StErrorFallbackContainer>
  );
}
export default ErrorFallback;
