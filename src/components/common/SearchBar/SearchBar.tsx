import cn from 'classnames';

import style from './SearchBar.module.scss';
import Icon from '../Icon/Icon';

export default function SearchBar() {
  const cnInput = cn(style.input, style['input-4']);

  return (
    <form className={style.form}>
      <button className={style.btn}>
        <Icon icon="search" className={style.icon} />
      </button>
      <input type="text" className={cnInput} placeholder="Search..." />
    </form>
  );
}
