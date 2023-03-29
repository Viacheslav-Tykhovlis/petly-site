import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/login/logIn-selectors';
import { Navigate, useParams } from 'react-router-dom';

export const ConditionalRoutes = ({
  component: Component,
  redirectTo = '/notices/:category',
}) => {
  const { category } = useParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect =
    !isLoggedIn && (category === 'favorite' || category === 'own');

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
