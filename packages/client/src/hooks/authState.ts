import { useAppSelector } from './redux';

export const authState = () => {
  const authError = useAppSelector(state => state.AUTH.error);
  const user = useAppSelector(state => state.AUTH.user);
  return [authError, user];
};
