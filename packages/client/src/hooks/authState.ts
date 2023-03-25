import { useAppSelector } from './redux';

export const authState = () => {
  const authError = useAppSelector(state => state.AUTH.error);
  const user = useAppSelector(state => state.AUTH.user);
  const isLoading = useAppSelector(state => state.AUTH.isLoading);
  return { authError, user, isLoading };
};
