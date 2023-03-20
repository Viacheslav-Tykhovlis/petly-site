import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import NoticesCategoriesList from './Notices/NoticesCategoriesList/NoticesCategoriesList';
import NotFound from 'pages/NotFoundPage/NotFound';
import UserPage from 'pages/UserPage/UserPage';


export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<NewsPage />} />

            <Route path="/notices" element={<NoticesPage />}>
              <Route path="sell" element={<NoticesCategoriesList />} />
              <Route path="lost-found" element={<NoticesCategoriesList />} />
              <Route path="for-free" element={<NoticesCategoriesList />} />
              <Route path="favorite" element={<NoticesCategoriesList />} />
              <Route path="own" element={<NoticesCategoriesList />} />
            </Route>

            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
