import styles from "./MinesPage.module.scss";
import { Header } from "./Header";

import { initiateNewGame } from "@/pages/mines";
import { MinesSettings } from "@/widgets/MinesSettings";
import { MinesDesk } from "@/widgets/MinesDesk";
import { useSettings, generateMinesSequence } from "@/entities/Settings";
import { Button } from "@/shared/Button";

export const MinesPage = () => {
  const {
    DEFAULT_MINES_SEQUENCE,
    isGameInitiated,
    winAmount,
    balance,
    gameCredit,
    AMOUNT_OF_CELLS,
    minesSequence,
    amountOfBombs,
    setIsGameInitiated,
    setBalance,
    setMinesSequence,
    setWinAmount,
    setMineCounter,
  } = useSettings();

  const handleGameStart = () => {
    initiateNewGame({
      setIsGameInitiated,
      setBalance,
      balance,
      gameCredit,
    });
    generateMinesSequence({
      AMOUNT_OF_CELLS,
      setMinesSequence,
      amountOfBombs,
    });
  };
  const handleRevealMines = () => {
    const newMinesSequence = minesSequence.map((mine) => {
      return {
        ...mine,
        isRevealed: !mine.isRevealed,
      };
    });
    setMinesSequence(newMinesSequence);
  };

  const handleStopGame = () => {
    if (isGameInitiated) {
      setBalance(balance + winAmount);
      setIsGameInitiated(false);
      setWinAmount(0);
      setMineCounter(0);
      setMinesSequence(DEFAULT_MINES_SEQUENCE);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles["column-wrapper"]}>
          <div className={styles["column-wrapper__item"]}>
            {/* Место для виджета настройки игры */}
            <MinesSettings />

            {!isGameInitiated && (
              <Button
                onClick={handleGameStart}
                isDisabled={gameCredit > balance}
              >
                Начать игру
              </Button>
            )}
            {isGameInitiated && (
              <>
                <Button onClick={handleStopGame} isDisabled={winAmount === 0}>
                  {isGameInitiated ? `Забрать ${winAmount}` : "Забрать выигрыш"}
                </Button>
                <Button
                  onClick={handleRevealMines}
                  isDisabled={!isGameInitiated}
                >
                  Вскрыть мины
                </Button>
              </>
            )}
          </div>
          <div className={styles["column-wrapper__item"]}>
            {/* Место для виджета с игрой */}
            <MinesDesk />
          </div>
        </div>
      </div>
    </div>
  );
};
