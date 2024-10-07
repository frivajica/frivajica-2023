import type { ButtonProps } from '@/interfaces/components';
import styles from './HorizontalBtn.module.css';

export const HorizontalBtn = ({ children, className, ...props }: ButtonProps) => {
  const style = [styles.horizontal, className || ''].join(' ');

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};
