import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import style from './Navigation.module.scss';
import Icon from '../Icon/Icon';

type NavLinkProps = {
  isActive: boolean;
};

const cnLink = ({ isActive }: NavLinkProps) => {
  return cn(style.navLink, 'text-1', { [style.active]: isActive });
};

const cnNav = cn(style.nav, 'container');

export default function Navigation() {
  return (
    <nav className={cnNav}>
      <div className={style.navPages}>
        <NavLink to="/" className={cnLink}>
          New
        </NavLink>
        <NavLink to="/" className={cnLink}>
          Men`s
        </NavLink>
        <NavLink to="/" className={cnLink}>
          Women`s
        </NavLink>
        <NavLink to="/" className={cnLink}>
          Sale
        </NavLink>
      </div>
      <div className={style.navButtons}>
        <NavLink to="/" className={style.navBtn}>
          <Icon icon="heart" />
        </NavLink>
        <button>
          <Icon icon="cart" />
        </button>
      </div>
    </nav>
  );
}
