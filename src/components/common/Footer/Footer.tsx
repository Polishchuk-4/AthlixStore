import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Logo from '../Logo/Logo';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <section className={style.footer}>
      <Logo topic="light" size="small" />
      <div className={style.container}>
        <div className={style.column}>
          <h3 className={style['text-1']}>Shop</h3>
          <Link to="/" className={style['text-2']}>
            New collection
          </Link>
          <Link to="/" className={style['text-2']}>
            Men`s
          </Link>
          <Link to="/" className={style['text-2']}>
            Women`s
          </Link>
        </div>
        <div className={style.column}>
          <h3 className={style['text-1']}>About Us</h3>
          <Link to="/" className={style['text-2']}>
            Brand
          </Link>
          <Link to="/" className={style['text-2']}>
            Contact
          </Link>
          <Link to="/" className={style['text-2']}>
            Location
          </Link>
        </div>
        <div className={style.column}>
          <h3 className={style['text-1']}>FAQS</h3>
          <Link to="/" className={style['text-2']}>
            Payment
          </Link>
          <Link to="/" className={style['text-2']}>
            Shipping & Delivery
          </Link>
          <Link to="/" className={style['text-2']}>
            Return & Exchange
          </Link>
        </div>
        <div className={style.column}>
          <h3 className={style['text-1']}>Contact Us</h3>
          <p className={style['text-2']}>webstore@gmail.com</p>
          <p className={style['text-2']}>123 456 789</p>
        </div>
      </div>
      <div className={style.copyRight}>
        <Icon icon="copyRight" />
        <p className={style['text-2']}> 2024 WebStore</p>
      </div>
    </section>
  );
}
