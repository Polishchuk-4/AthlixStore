import cn from 'classnames';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

import style from './AppBar.module.scss';
import { Link } from 'react-router-dom';

const cnLink = () => {
  return cn(style.navLink, 'button-3');
};

export default function AppBar() {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.items}>
            <Logo topic="dark" size="medium" />
            <div className={style.row}>
              <SearchBar />
              <Link to="/login" className={cnLink()}>
                Sign In
              </Link>
              <button className={cnLink()}>EN </button>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}
