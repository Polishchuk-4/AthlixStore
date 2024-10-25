import ImageCard from '../../../common/ImageCard/ImageCard';
import style from './NewCollectionSection.module.scss';

import collection1 from '../../../../../public/image/collection1.png';
import collection2 from '../../../../../public/image/collection2.png';
import collection3 from '../../../../../public/image/collection3.png';
import collection4 from '../../../../../public/image/collection4.png';
import collection5 from '../../../../../public/image/collection5.png';

import Button from '../../../common/Button/Button';
import Icon from '../../../common/Icon/Icon';

export default function NewCollectionSection() {
  return (
    <section className={style.container}>
      <h2 className={style['title-1']}>New collection</h2>
      <div className={style.body}>
        <ImageCard url={collection1} />
        <ImageCard
          url={collection2}
          button={
            <Button
              size="extraSmall"
              icon={<Icon icon="arrow-right" />}
              className={style['button-1']}
            >
              View more
            </Button>
          }
        />
        <ImageCard url={collection3} />
        <ImageCard url={collection4} />
        <ImageCard
          url={collection5}
          button={
            <Button
              size="extraSmall"
              icon={<Icon icon="arrow-right" />}
              className={style['button-1']}
            >
              View more
            </Button>
          }
        />
      </div>
    </section>
  );
}
