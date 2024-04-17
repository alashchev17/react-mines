import { FC } from "react";
import styles from "./Text.module.scss";

type TextProps = {
  text: string;
};

export const Text: FC<TextProps> = ({ text }) => {
  return (
    <div>
      <p
        className={`uppercase text-center ${styles["text"]} ${styles["text--lighter"]}`}
      >
        {text}
      </p>
    </div>
  );
};
