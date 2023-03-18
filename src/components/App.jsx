import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}></Route>
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </Container>
      ;
    </>
  );
};
