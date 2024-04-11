import React from "react";
import { Input } from "@/shared/Input";
import { useSettings } from "@/entities/Settings";
import { updateAmountOfBombs } from "@/features/ChangeBombsAmount";

import styles from "./ChangeBombsAmount.module.scss";

export const ChangeBombsAmount = () => {
  const {
    setAmountOfBombs,
    amountOfBombs,
    isGameInitiated,
    setCurrentCoefficients,
    gameCredit,
    setWinRates,
  } = useSettings();
  return (
    <>
      <span className={styles.text}>Количество бомб: {amountOfBombs}</span>
      <Input
        type="range"
        value={amountOfBombs.toString()}
        range={{ min: 2, max: 24, step: 1 }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          updateAmountOfBombs({
            amount: e.target.value,
            setAmountOfBombs,
            setCurrentCoefficients,
            setWinRates,
            gameCredit,
          })
        }
        isDisabled={isGameInitiated}
      />
    </>
  );
};
