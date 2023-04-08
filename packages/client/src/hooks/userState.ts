import { useAppSelector } from './redux';

export const userState = () => {
  const userError = useAppSelector(state => state.USER.error);
  const user = useAppSelector(state => state.USER.user);
  const isLoading = useAppSelector(state => state.USER.isLoading);
  return { userError: userError, user, isLoading };
};
