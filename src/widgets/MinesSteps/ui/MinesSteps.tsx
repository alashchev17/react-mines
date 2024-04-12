import styles from "./MinesSteps.module.scss";
import { useSettings } from "@/entities/Settings";

export const MinesSteps = () => {
  const { winRates, currentCoefficients } = useSettings();
  return (
    <div className={styles["steps"]}>
      <div className={styles["steps__wrapper"]}>
        {currentCoefficients.map((el, index) => {
          return (
            <div
              key={el}
              className={styles["steps__item"]}
              data-step={`Шаг ${index + 1}`}
            >
              <span className={styles["steps__item-text"]}>
                {winRates[index]}
              </span>
              <span className={styles["steps__item-subtext"]}>{`x${el}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
