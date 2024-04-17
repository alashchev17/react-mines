import styles from "./Mine.module.scss";

type MineProps = {
  onClick: () => void;
  isRevealed: boolean;
  isBomb: boolean;
  isStatistics?: boolean;
};

export const Mine = ({
  onClick,
  isRevealed,
  isBomb,
  isStatistics,
}: MineProps) => {
  let mineClassNames;

  if (!isStatistics) {
    mineClassNames = `${styles["mine"]} ${
      isRevealed
        ? isBomb
          ? styles["mine--revealed-bomb"]
          : styles["mine--revealed-correct"]
        : ""
    }`;
  } else {
    mineClassNames = `${styles["mine"]} ${
      isRevealed &&
      (!isBomb
        ? styles["mine--revealed-correct"]
        : styles["mine--revealed-bomb"])
    } ${
      !isRevealed &&
      (!isBomb
        ? styles["mine--statistics-correct"]
        : styles["mine--statistics-bomb"])
    } `;
  }

  return <div className={mineClassNames} onClick={onClick}></div>;
};
