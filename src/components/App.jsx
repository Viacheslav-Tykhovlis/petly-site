import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

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

// const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices/:category" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
