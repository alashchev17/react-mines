import { FC } from "react";
import ButtonStyle from "./Button.module.scss";

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
          ? `${ButtonStyle.button} ${ButtonStyle["button--inline"]}`
          : ButtonStyle.button
      }
    >
      {children}
    </button>
  );
};
