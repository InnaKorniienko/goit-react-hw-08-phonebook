import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import { UserMenu } from 'components/Application/UserMenu/UserMenu';
import Container from '../Container/Container';
import style from './Layout.module.css';

export const Layout = () => {
  return (
    <Container>
      <div className={style.div}>
        <h2 className={style.h2}>Phonebook</h2>
        <UserMenu />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
