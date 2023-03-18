import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Link, Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <section>
      <div>
        <h1 style={{ textAlign: 'center' }}>Find your favorite pet</h1>

        <form>
          <label htmlFor="search"></label>
          <input id="search" name="search" placeholder="Search" />
          <button type="submit">Search</button>
        </form>

        <Link style={{ display: 'block' }}>Add pet</Link>

        <NoticesCategoriesNav />

        <Outlet />
      </div>
    </section>
  );
};

export default NoticesPage;
