import present from '../../../../../public/image/present.png';
import Logo from '../../../common/Logo/Logo';

import style from './PresentSection.module.scss';

export default function PresentSection() {
  return (
    <section className={style.present}>
      <img src={present} alt="Present" className={style.img} />
      <div className={style.container}>
        <div className={style.row}>
          <h1 className={style.title}>Welcome to</h1>
          <div className={style.logoContainer}>
            <Logo topic="dark" size="big" />
          </div>
        </div>
        <p className={style['text-2']}>
          Here, your journey to adventure begins with every step. We offer
          <br />
          reliable gear to help you conquer peaks and explore the world with
          <br />
          comfort and confidence. Set your sights beyond the horizon – nature
          <br />
          is waiting for you!
        </p>
      </div>
    </section>
  );
}
