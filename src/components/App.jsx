import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import { RestrictedRoute } from './RestrictedRoutes/RestrictedRoutes';
import { PrivateRoute } from './PravateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('pages/Home/Home'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage'),
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/notices/:category" element={<NoticesPage />} />
              <Route path="/friends" element={<OurFriendsPage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={RegisterPage}
                  />
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
          <ToastContainer autoClose={1500} pauseOnHover={false} />
        </Suspense>
      </Container>
    </>
  );
};
