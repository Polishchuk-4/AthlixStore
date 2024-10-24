import { SVGProps, useMemo } from 'react';
import sprites from '../../../../public/svg/sprites.svg';

import cn from 'classnames';
import styles from './Icon.module.scss';

type IconType =
  | 'cart'
  | 'heart'
  | 'trash'
  | 'checkmark'
  | 'warning'
  | 'success'
  | 'error'
  | 'eye-on'
  | 'eye-off'
  | 'search'
  | 'arrow-right';

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
  size?: number;
  color?: string;
  hover?: boolean;
  className?: string;
}

const Icon = ({
  icon,
  size = 24,
  color = 'currentColor',
  hover = false,
  className,
  ...restProps
}: IconProps) => {
  const classNames = useMemo(
    () => cn(styles.icon, { [styles.hover]: hover }, className),
    [className, hover],
  );

  return (
    <svg width={size} height={size} fill={color} className={classNames} {...restProps}>
      <use href={`${sprites}#icon-${icon}`} />
    </svg>
  );
};

export default Icon;
