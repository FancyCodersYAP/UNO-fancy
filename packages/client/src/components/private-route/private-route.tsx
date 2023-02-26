import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthorizationStatus, AppRoute } from '../../consts'

type PrivateRouteProps = {
  children: any
}

type Props = FC<PrivateRouteProps>

const PrivateRoute: Props = ({ children }) => {
  const { authorizationStatus } = useSelector((state: any) => state.USER)
  // authorizationStatus - AUTH/NO_AUTH
  return authorizationStatus === AuthorizationStatus.AUTH ? (
    children
  ) : (
    <Navigate to={AppRoute.LOGIN} />
  )
}

export default PrivateRoute
