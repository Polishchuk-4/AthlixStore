import Button from '../../../common/Button/Button';
import Icon from '../../../common/Icon/Icon';
import style from './PreviewSection.module.scss';

import cn from 'classnames';

const cnBody = cn('container', style.preview);
const cnBtn = cn('button-1', style.btn);

export default function PreviewSection() {
  return (
    <section className={cnBody}>
      <Button icon={<Icon icon="arrow-right" />} size="small" className={cnBtn}>
        View collection
      </Button>
    </section>
  );
}
