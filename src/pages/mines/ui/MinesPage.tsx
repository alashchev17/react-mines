import styles from "./MinesPage.module.scss";
import { Header } from "./Header";

import { initiateNewGame } from "@/pages/mines";
import { MinesSettings } from "@/widgets/MinesSettings";
import { MinesDesk } from "@/widgets/MinesDesk";
import { useSettings } from "@/entities/Settings";
import { Button } from "@/shared/Button";
import { generateMinesSequence } from "@/entities/Settings/model/generateMinesSequence.ts";

export const MinesPage = () => {
  const {
    isGameInitiated,
    setIsGameInitiated,
    setBalance,
    balance,
    gameCredit,
    AMOUNT_OF_CELLS,
    minesSequence,
    setMinesSequence,
    amountOfBombs,
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

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles["column-wrapper"]}>
          <div className={styles["column-wrapper__item"]}>
            {/* Место для виджета настройки игры */}
            <MinesSettings />

            <Button
              onClick={handleGameStart}
              isDisabled={isGameInitiated || gameCredit > balance}
            >
              Начать игру
            </Button>
            <Button onClick={handleRevealMines} isDisabled={!isGameInitiated}>
              Вскрыть мины
            </Button>
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
