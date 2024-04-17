import styles from "./MinesDesk.module.scss";
import { Mine } from "@/shared/Mine";
import { useSettings } from "@/entities/Settings";
import { FC } from "react";

type MinesDeskProps = {
  isStatistics?: boolean;
};

export const MinesDesk: FC<MinesDeskProps> = ({ isStatistics }) => {
  const {
    DEFAULT_MINES_SEQUENCE,
    AMOUNT_OF_CELLS,
    amountOfBombs,
    mineCounter,
    minesSequence,
    minesStatistics,
    isGameInitiated,
    balance,
    gameCredit,
    winAmount,
    winRates,
    setBalance,
    setMinesSequence,
    setIsGameInitiated,
    setWinAmount,
    setMineCounter,
    setMinesStatistics,
  } = useSettings();
  const handleMineClick = (id: number) => {
    if (!isGameInitiated) return;
    if (minesSequence[id].isRevealed) return;
    const newMinesSequence = [...minesSequence];
    setMineCounter(mineCounter + 1);
    newMinesSequence[id].isRevealed = true;

    if (newMinesSequence[id].isBomb) {
      setIsGameInitiated(false);
      setWinAmount(0);
      setMineCounter(0);
      setMinesStatistics({
        isEmpty: false,
        isLose: true,
        isVisible: minesStatistics.isVisible,
        gameCredit,
        winAmount,
        winRates,
        mineCounter,
        minesSequence,
      }); // сохраняем статистику конкретной игры
      return;
    }

    setWinAmount(winRates[mineCounter]);
    if (mineCounter + 1 === AMOUNT_OF_CELLS - amountOfBombs) {
      setIsGameInitiated(false);
      setBalance(balance + Number(winRates[mineCounter]));
      setWinAmount(0);
      setMineCounter(0);
      setMinesStatistics({
        isEmpty: false,
        isLose: false,
        isVisible: minesStatistics.isVisible,
        gameCredit,
        winAmount,
        winRates,
        mineCounter,
        minesSequence,
      }); // сохраняем статистику конкретной игры
      setMinesSequence(DEFAULT_MINES_SEQUENCE);
      return;
    }

    setMinesSequence(newMinesSequence);
  };

  // const minesForMapping = minesStatistics.minesSequence.length
  //   ? minesStatistics.minesSequence
  //   : minesSequence;
  let minesForMapping = minesSequence;
  if (isStatistics) {
    minesForMapping = minesStatistics.minesSequence;
  }
  const minesDeskClasses = minesStatistics.minesSequence.length
    ? `${styles["mines-desk"]} ${styles["mines-desk--statistics"]}`
    : styles["mines-desk"];

  return (
    <div className={minesDeskClasses}>
      {minesForMapping.map(({ id, isBomb, isRevealed }) => (
        <Mine
          key={id}
          onClick={() => handleMineClick(id)}
          isRevealed={isRevealed}
          isBomb={isBomb}
          isStatistics={isStatistics}
        />
      ))}
    </div>
  );
};
