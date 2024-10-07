import type { ButtonProps } from '@/interfaces/components';
import styles from './VerticalBtn.module.css';

export const VerticalBtn = ({ children, className, ...props }: ButtonProps) => {
  const style = [styles.horizontal, className || ''].join(' ');

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};
