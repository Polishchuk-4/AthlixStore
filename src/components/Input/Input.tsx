import { InputHTMLAttributes, ReactNode, useMemo } from 'react';

import cn from 'classnames';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  inputSize?: 'large' | 'medium' | 'small';
  variant?: 'default' | 'success' | 'error' | 'warning';
  icon?: ReactNode;
}

const Input = ({
  placeholder,
  inputSize = 'medium',
  variant = 'default',
  icon,
  disabled,
  className,
  ...restProps
}: InputProps) => {
  const classNames = useMemo(
    () => cn(styles.input, styles[inputSize], styles[variant], className),
    [className, inputSize, variant],
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>{icon}</span>
      <input
        className={classNames}
        type="text"
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default Input;
