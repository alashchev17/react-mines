import React, { createContext, useContext, useState } from "react";
import { TMinesSequence } from "@/entities/Settings";

type SettingsContextType = {
  AMOUNT_OF_CELLS: number;
  amountOfBombs: number;
  balance: number;
  isGameInitiated: boolean;
  minesSequence: TMinesSequence[];
  setIsGameInitiated: (state: boolean) => void;
  setAmountOfBombs: (amount: number) => void;
  setBalance: (amount: number) => void;
  gameCredit: number;
  setGameCredit: (amount: number) => void;
  setMinesSequence: (sequence: TMinesSequence[]) => void;
};

export const SettingsContext = createContext<SettingsContextType | null>(null);

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [amountOfBombs, setAmountOfBombs] = useState(3);
  const AMOUNT_OF_CELLS = 25;
  const [balance, setBalance] = useState(100);
  const [gameCredit, setGameCredit] = useState(1);
  const [isGameInitiated, setIsGameInitiated] = useState(false);
  const [minesSequence, setMinesSequence] = useState<TMinesSequence[]>([
    { id: 0, isBomb: false, isRevealed: false },
    { id: 1, isBomb: false, isRevealed: false },
    { id: 2, isBomb: false, isRevealed: false },
    { id: 3, isBomb: false, isRevealed: false },
    { id: 4, isBomb: false, isRevealed: false },
    { id: 5, isBomb: false, isRevealed: false },
    { id: 6, isBomb: false, isRevealed: false },
    { id: 7, isBomb: false, isRevealed: false },
    { id: 8, isBomb: false, isRevealed: false },
    { id: 9, isBomb: false, isRevealed: false },
    { id: 10, isBomb: false, isRevealed: false },
    { id: 11, isBomb: false, isRevealed: false },
    { id: 12, isBomb: false, isRevealed: false },
    { id: 13, isBomb: false, isRevealed: false },
    { id: 14, isBomb: false, isRevealed: false },
    { id: 15, isBomb: false, isRevealed: false },
    { id: 16, isBomb: false, isRevealed: false },
    { id: 17, isBomb: false, isRevealed: false },
    { id: 18, isBomb: false, isRevealed: false },
    { id: 19, isBomb: false, isRevealed: false },
    { id: 20, isBomb: false, isRevealed: false },
    { id: 21, isBomb: false, isRevealed: false },
    { id: 22, isBomb: false, isRevealed: false },
    { id: 23, isBomb: false, isRevealed: false },
    { id: 24, isBomb: false, isRevealed: false },
  ]);

  return (
    <SettingsContext.Provider
      value={{
        AMOUNT_OF_CELLS,
        amountOfBombs,
        balance,
        gameCredit,
        isGameInitiated,
        minesSequence,
        setAmountOfBombs,
        setBalance,
        setGameCredit,
        setIsGameInitiated,
        setMinesSequence,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
