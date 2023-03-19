import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import NoticesPetsList from './NoticesCategoriesList/NoticesCategoriesList';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import NoticesPetsListOwn from './NoticesCategoriesList/NoticesPetsListOwn';
import NoticesPetsListSell from './NoticesCategoriesList/NoticesPetsListSell';

const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />

            <Route path="/notices" element={<NoticesPage />}>
              {/* <Route index element={<NoticesPetsListSell />} /> */}
              <Route path="sell" element={<NoticesPetsListSell />} />
              <Route path="lost-found" element={<NoticesPetsList />} />
              <Route path="for-free" element={<NoticesPetsList />} />
              <Route path="favorite" element={<NoticesPetsList />} />
              <Route path="own" element={<NoticesPetsListOwn />} />
            </Route>

            <Route path="/friends" element={<OurFriendsPage />} />

            <Route path="/register" element={<RegisterPage/>} />
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Container>
    </>
  );
};
