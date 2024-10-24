import darkLogo from '../../../../public/image/darkLogo.png';
import lightLogo from '../../../../public/image/darkLogo.png';

import cn from 'classnames';
import style from './Logo.module.scss';

type logoProps = {
  topic: 'light' | 'dark';
  size: 'small' | 'medium' | 'big';
};

export default function Logo({ topic, size }: logoProps) {
  const classnames = cn(style.imageCard, style[size]);
  return (
    <div className={classnames}>
      <img
        className={style.imageCardImg}
        src={topic === 'light' ? lightLogo : darkLogo}
        alt="Athlix logo"
      />
    </div>
  );
}
