import React from "react";
import { useSettings } from "@/entities/Settings";
import { updateGameCredit } from "@/features/ChangeGameCredit";

import styles from "./ChangeGameCredit.module.scss";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";

export const ChangeGameCredit = () => {
  const { balance, gameCredit, setGameCredit } = useSettings();
  return (
    <>
      <span className={styles["text"]}>Размер игры:</span>
      <div className={styles["wrapper"]}>
        <div className={styles["wrapper-item"]}>
          <Button
            onClick={() => updateGameCredit(balance, setGameCredit)}
            isInline
          >
            MAX
          </Button>
          <Button onClick={() => updateGameCredit(1, setGameCredit)} isInline>
            MIN
          </Button>
        </div>
        <Input
          type="text"
          value={gameCredit.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateGameCredit(Number(e.target.value), setGameCredit)
          }
        />
        <div className={styles["wrapper-item"]}>
          <Button
            onClick={() => updateGameCredit(gameCredit * 2, setGameCredit)}
            isInline
          >
            x2
          </Button>
          <Button
            onClick={() =>
              updateGameCredit(Math.floor(gameCredit / 2), setGameCredit)
            }
            isInline
          >
            /2
          </Button>
        </div>
      </div>
    </>
  );
};
