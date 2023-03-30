import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccessToken } from '../redux/login/logIn-selectors';
import { currenthUser } from '../redux/users/operations';
import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFound from 'pages/NotFoundPage/NotFound';
import UserPage from 'pages/UserPage/UserPage';
import { RestrictedRoute } from './RestrictedRoutes/RestrictedRoutes';
import { PrivateRoute } from './PravateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(currenthUser());
    // eslint-disable-next-line
  }, [dispatch]);


  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices/:category" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/user" component={RegisterPage} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/user" />
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute redirectTo="/login" component={<UserPage />} />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </Container>
    </>
  );
};
