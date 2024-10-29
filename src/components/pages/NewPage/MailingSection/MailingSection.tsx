import ImageCard from '../../../common/ImageCard/ImageCard';

import mailing1 from '../../../../../public/image/mailing1.png';
import mailing2 from '../../../../../public/image/mailing2.png';

import style from './MailingSection.module.scss';
import Button from '../../../common/Button/Button';
import Icon from '../../../common/Icon/Icon';
import MailingForm from '../../../common/MailingForm/MailingForm';

export default function MailingSection() {
  return (
    <section className={style.container}>
      <div className={style.imageRow}>
        <ImageCard
          url={mailing1}
          button={<Button size="extraSmall" icon={<Icon icon="arrow-right" />} />}
          text="Men`s"
        />
        <ImageCard
          url={mailing2}
          button={<Button size="extraSmall" icon={<Icon icon="arrow-right" />} />}
          text="Women`s"
        />
      </div>
      <div className={style.textColumn}>
        <h3 className={style['text-1']}>Stay in the loop!</h3>
        <p className={style['text-3']}>
          Sign up for our newsletter to receive exclusive offers, product updates,
          <br />
          and the latest news straight to your inbox.
        </p>
        <MailingForm />
      </div>
    </section>
  );
}
