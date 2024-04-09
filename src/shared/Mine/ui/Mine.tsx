import styles from "./Mine.module.scss";

type MineProps = {
  onClick: () => void;
  isRevealed: boolean;
  isBomb: boolean;
};

export const Mine = ({ onClick, isRevealed, isBomb }: MineProps) => {
  const mineClassNames = `${styles["mine"]} ${
    isRevealed
      ? isBomb
        ? styles["mine--revealed-bomb"]
        : styles["mine--revealed-correct"]
      : ""
  }`;

  return <div className={mineClassNames} onClick={onClick}></div>;
};
