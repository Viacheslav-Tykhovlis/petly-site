import { Link, Outlet } from 'react-router-dom';

import Title from 'components/Title/Title';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

const NoticesPage = () => {
  return (
    <section>
      <div style={{ textAlign: 'center' }}>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <Link style={{ display: 'block' }}>Add pet</Link>
        {/* {modal window} */}

        <Outlet />
      </div>
    </section>
  );
};

export default NoticesPage;
