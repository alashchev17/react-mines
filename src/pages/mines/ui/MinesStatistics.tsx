import styles from "./MinesStatistics.module.scss";
import { useSettings, roundToTwoDecimals } from "@/entities/Settings";
import { Heading } from "@/shared/Heading";
import { MinesDesk } from "@/widgets/MinesDesk";
import { Text } from "@/shared/Text";

export const MinesStatistics = () => {
  const {
    currentCoefficients,
    setMinesStatistics,
    minesStatistics,
    amountOfBombs,
    AMOUNT_OF_CELLS,
  } = useSettings();

  const handleStatisticsClose = () => {
    setMinesStatistics({
      ...minesStatistics,
      isVisible: !minesStatistics.isVisible,
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["modal"]}>
        <button
          onClick={handleStatisticsClose}
          className={styles["modal__close"]}
        >
          &times;
        </button>
        <Heading text={"Статистика"} level={6} />
        <div className={styles["modal__row"]}>
          <div>
            <Text text={"Размер игры"} />
            <Heading
              text={roundToTwoDecimals(minesStatistics.gameCredit).toString()}
              level={6}
            />
          </div>
          <div>
            <Text text={"Коэффициент"} />
            <Heading
              text={`x${roundToTwoDecimals(
                currentCoefficients[
                  minesStatistics.isLose ||
                  minesStatistics.mineCounter === 0 ||
                  minesStatistics.mineCounter + 1 ===
                    AMOUNT_OF_CELLS - amountOfBombs
                    ? minesStatistics.mineCounter
                    : minesStatistics.mineCounter - 1
                ],
              )}`}
              level={6}
            />
          </div>
          <div>
            <Text text={"Результат"} />
            <Heading
              text={
                minesStatistics.isLose
                  ? "0"
                  : roundToTwoDecimals(
                      minesStatistics.winRates[
                        minesStatistics.isLose ||
                        minesStatistics.mineCounter === 0 ||
                        minesStatistics.mineCounter + 1 ===
                          AMOUNT_OF_CELLS - amountOfBombs
                          ? minesStatistics.mineCounter
                          : minesStatistics.mineCounter - 1
                      ],
                    ).toString()
              }
              level={6}
            />
          </div>
        </div>
        <div className={styles["modal__desk"]}>
          <MinesDesk key={"mines-statistics"} isStatistics={true} />
        </div>
      </div>
    </div>
  );
};
