import styles from "./MinesPage.module.scss";
import { Header } from "./Header";

import { initiateNewGame } from "@/pages/mines";
import { MinesStatistics } from "@/pages/mines/ui/MinesStatistics";
import { MinesSettings } from "@/widgets/MinesSettings";
import { MinesDesk } from "@/widgets/MinesDesk";
import { MinesSteps } from "@/widgets/MinesSteps";
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
    amountOfBombs,
    minesSequence,
    minesStatistics,
    winRates,
    mineCounter,
    setIsGameInitiated,
    setBalance,
    setMinesSequence,
    setWinAmount,
    setMineCounter,
    setMinesStatistics,
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
  /*const handleRevealMines = () => {
    const newMinesSequence = minesSequence.map((mine) => {
      return {
        ...mine,
        isRevealed: !mine.isRevealed,
      };
    });
    setMinesSequence(newMinesSequence);
  };
  */

  const handleStopGame = () => {
    if (isGameInitiated) {
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
      setBalance(balance + Number(winAmount));
      setIsGameInitiated(false);
      setWinAmount(0);
      setMineCounter(0);
      setMinesSequence(DEFAULT_MINES_SEQUENCE);
    }
  };

  const handleStatistics = () => {
    setMinesStatistics({
      ...minesStatistics,
      isVisible: true,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles["column-wrapper"]}>
            <div className={styles["column-wrapper__item"]}>
              {/* Место для виджета настройки игры */}
              <MinesSettings />

              {!isGameInitiated && (
                <>
                  <Button
                    onClick={handleGameStart}
                    isDisabled={gameCredit > balance}
                  >
                    Начать игру
                  </Button>
                  <Button
                    onClick={handleStatistics}
                    isDisabled={minesStatistics.isEmpty}
                  >
                    Посмотреть результаты
                  </Button>
                </>
              )}
              {isGameInitiated && (
                <>
                  <Button onClick={handleStopGame} isDisabled={winAmount === 0}>
                    {isGameInitiated
                      ? `Забрать ${winAmount}`
                      : "Забрать выигрыш"}
                  </Button>
                  {/*<Button*/}
                  {/*  onClick={handleRevealMines}*/}
                  {/*  isDisabled={!isGameInitiated}*/}
                  {/*>*/}
                  {/*  Вскрыть мины*/}
                  {/*</Button>*/}
                </>
              )}
            </div>
            <div className={styles["column-wrapper__item"]}>
              {/* Место для виджета с игрой */}
              <MinesDesk />
              <MinesSteps />
            </div>
          </div>
        </div>
      </div>
      {minesStatistics.isVisible && <MinesStatistics />}
    </>
  );
};
