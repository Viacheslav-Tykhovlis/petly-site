import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import NoticesPetsList from './NoticesPetsList/NoticesPetsList';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
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
              <Route
                path="/notices/:categoryName"
                element={<NoticesPetsList />}
              />
            </Route>
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Container>
    </>
  );
};
