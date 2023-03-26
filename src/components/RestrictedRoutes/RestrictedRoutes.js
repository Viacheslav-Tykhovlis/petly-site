import { useAuth } from 'hooks/useAuth';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/login/logIn-selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
