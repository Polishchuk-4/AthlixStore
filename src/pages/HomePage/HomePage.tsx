import Icon from '../../components/Icon/Icon';
import Input from '../../components/Input/Input';
import style from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main className={style.main}>
      <p>HomePage</p>
      <Input placeholder="Password" icon={<Icon icon="eye-on" />} />
    </main>
  );
}
