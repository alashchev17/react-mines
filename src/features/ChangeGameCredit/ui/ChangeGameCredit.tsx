import React from "react";
import { useSettings } from "@/entities/Settings";
import { updateGameCredit } from "@/features/ChangeGameCredit";

import styles from "./ChangeGameCredit.module.scss";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";

export const ChangeGameCredit = () => {
  const {
    balance,
    gameCredit,
    setGameCredit,
    isGameInitiated,
    currentCoefficients,
    setCurrentCoefficients,
    setWinRates,
  } = useSettings();
  return (
    <>
      <span className={styles["text"]}>Размер игры:</span>
      <div className={styles["wrapper"]}>
        <div className={styles["wrapper-item"]}>
          <Button
            onClick={() =>
              updateGameCredit({
                amount: balance,
                setGameCredit,
                setCurrentCoefficients,
                currentCoefficients,
                setWinRates,
              })
            }
            isInline
            isDisabled={isGameInitiated}
          >
            MAX
          </Button>
          <Button
            onClick={() =>
              updateGameCredit({
                amount: 1,
                setGameCredit,
                setCurrentCoefficients,
                currentCoefficients,
                setWinRates,
              })
            }
            isInline
            isDisabled={isGameInitiated}
          >
            MIN
          </Button>
        </div>
        <Input
          type="text"
          value={gameCredit.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateGameCredit({
              amount: Number(e.target.value),
              setGameCredit,
              setCurrentCoefficients,
              currentCoefficients,
              setWinRates,
            })
          }
          range={{ min: 1, max: 1000000, step: 1 }}
          isDisabled={isGameInitiated}
        />
        <div className={styles["wrapper-item"]}>
          <Button
            onClick={() =>
              updateGameCredit({
                amount: gameCredit * 2 < balance ? gameCredit * 2 : balance,
                setGameCredit,
                setCurrentCoefficients,
                currentCoefficients,
                setWinRates,
              })
            }
            isInline
            isDisabled={isGameInitiated}
          >
            x2
          </Button>
          <Button
            onClick={() =>
              updateGameCredit({
                amount: Math.floor(gameCredit / 2),
                setGameCredit,
                setCurrentCoefficients,
                currentCoefficients,
                setWinRates,
              })
            }
            isInline
            isDisabled={isGameInitiated}
          >
            /2
          </Button>
        </div>
      </div>
    </>
  );
};
