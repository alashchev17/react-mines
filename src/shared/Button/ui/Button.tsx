import { FC } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
  isDisabled?: boolean;
  onClick?: () => void;
  isInline?: boolean;
};
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  isInline,
  isDisabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        isInline
          ? `${styles.button} ${styles["button--inline"]}`
          : styles.button
      }
    >
      {children}
    </button>
  );
};
