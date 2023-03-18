import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import NoticesPetsList from './NoticesPetsList/NoticesPetsList';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />}>
              <Route
                path="/notices/:categoryName"
                element={<NoticesPetsList />}
              />
            </Route>
            <Route path="/friends " element={<OurFriendsPage />} />
          </Route>
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </Container>
    </>
  );
};
