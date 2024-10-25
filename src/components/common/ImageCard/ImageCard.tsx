import { ReactElement } from 'react';
import style from './ImageCard.module.scss';
import Button from '../Button/Button';

type ImageCardProps = {
  url: string;
  button?: ReactElement<typeof Button>;
  text?: string;
};

export default function ImageCard({ url, button, text }: ImageCardProps) {
  return (
    <div className={style.imageCard}>
      <img src={url} alt="Collection card" />
      <div className={style.row}>
        <p className={style.text}>{text}</p>
        <div className={style.buttonContainer}>{button}</div>
      </div>
    </div>
  );
}
