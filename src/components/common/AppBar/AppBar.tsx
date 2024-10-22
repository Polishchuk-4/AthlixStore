import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import SearchBar from '../SearchBar/SearchBar';

import style from './AppBar.module.scss';

export default function AppBar() {
  return (
    <>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.items}>
            <Logo topic="dark" size="medium" />
            <div className={style.row}>
              <SearchBar />
              <button className={style['button-3']}>Sign In</button>
              <button className={style['button-3']}>EN </button>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}
