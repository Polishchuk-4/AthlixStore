import { InputHTMLAttributes, ReactNode, useMemo, useState } from 'react';

import cn from 'classnames';
import styles from './Input.module.scss';
import Icon from '../Icon/Icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  inputSize?: 'large' | 'medium' | 'small';
  variant?: 'default' | 'success' | 'error' | 'warning';
  icon?: ReactNode;
  passwordInput?: boolean;
}

const Input = ({
  placeholder,
  inputSize = 'medium',
  variant = 'default',
  icon,
  disabled,
  className,
  passwordInput = false,
  ...restProps
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const classNames = useMemo(
    () => cn(styles.input, styles[inputSize], styles[variant], className),
    [className, inputSize, variant],
  );

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = useMemo(() => {
    if (passwordInput) {
      return isPasswordVisible ? 'text' : 'password';
    }
    return restProps.type || 'text';
  }, [isPasswordVisible, restProps.type, passwordInput]);

  return (
    <div className={styles.wrapper}>
      {passwordInput ? (
        <span className={styles.passwordIcon} onClick={handleTogglePasswordVisibility}>
          {isPasswordVisible ? <Icon icon="eye-on" /> : <Icon icon="eye-off" />}
        </span>
      ) : (
        <span className={styles.icon}>{icon}</span>
      )}
      <input
        className={classNames}
        type={inputType}
        disabled={disabled}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default Input;
