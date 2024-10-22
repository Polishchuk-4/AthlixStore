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
        src={
          topic === 'light'
            ? '../../../../public/light-logo.png'
            : '../../../../public/dark-logo.png'
        }
        alt="Athlix logo"
      />
    </div>
  );
}
