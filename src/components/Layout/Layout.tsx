import { ReactNode, Suspense } from 'react';

import style from './Layout.module.scss';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import AppBar from '../common/AppBar/AppBar';

interface LayoutProps {
  children: ReactNode;
}

const buildLinkClass = ({ isActive }: { isActive: boolean }) => {
  return cn(style.link, {
    [style.isActive]: isActive,
  });
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper">
      <AppBar />
      {/* <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink> */}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
