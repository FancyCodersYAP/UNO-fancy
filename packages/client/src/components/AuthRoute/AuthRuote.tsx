import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { AppRoute } from 'utils/constants';

type AuthRouteRouteProps = {
  children: React.ReactElement;
};

type Props = FC<AuthRouteRouteProps>;

const AuthRoute: Props = ({ children }) => {
  const { user } = useAppSelector(state => state.AUTH);

  return !user ? children : <Navigate to={AppRoute.MAIN} />;
};

export default AuthRoute;
