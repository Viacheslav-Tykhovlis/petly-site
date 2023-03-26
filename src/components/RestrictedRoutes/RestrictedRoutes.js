import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/login/logIn-selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/user',
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
