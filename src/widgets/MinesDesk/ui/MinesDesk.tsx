import styles from "./MinesDesk.module.scss";
import { Mine } from "@/shared/Mine";
import { useSettings, roundToTwoDecimals } from "@/entities/Settings";

export const MinesDesk = () => {
  const {
    DEFAULT_MINES_SEQUENCE,
    AMOUNT_OF_CELLS,
    amountOfBombs,
    mineCounter,
    minesSequence,
    isGameInitiated,
    balance,
    winRates,
    setBalance,
    setMinesSequence,
    setIsGameInitiated,
    setWinAmount,
    setMineCounter,
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
      return;
    }

    setWinAmount(winRates[mineCounter]);
    if (mineCounter + 1 === AMOUNT_OF_CELLS - amountOfBombs) {
      setIsGameInitiated(false);
      setBalance(roundToTwoDecimals(balance + winRates[mineCounter]));
      setWinAmount(0);
      setMineCounter(0);
      setMinesSequence(DEFAULT_MINES_SEQUENCE);
      return;
    }

    setMinesSequence(newMinesSequence);
  };
  return (
    <div className={styles["mines-desk"]}>
      {minesSequence.map(({ id, isBomb, isRevealed }) => (
        <Mine
          key={id}
          onClick={() => handleMineClick(id)}
          isRevealed={isRevealed}
          isBomb={isBomb}
        />
      ))}
    </div>
  );
};
