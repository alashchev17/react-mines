import React, { createContext, useContext, useState } from "react";
import { TMinesSequence } from "@/entities/Settings";

type SettingsContextType = {
  DEFAULT_MINES_SEQUENCE: TMinesSequence[];
  AMOUNT_OF_CELLS: number;
  amountOfBombs: number;
  balance: number;
  isGameInitiated: boolean;
  minesSequence: TMinesSequence[];
  winAmount: number;
  mineCounter: number;
  currentCoefficients: number[];
  winRates: number[];
  setIsGameInitiated: (state: boolean) => void;
  setAmountOfBombs: (amount: number) => void;
  setBalance: (amount: number) => void;
  gameCredit: number;
  setGameCredit: (amount: number) => void;
  setMinesSequence: (sequence: TMinesSequence[]) => void;
  setWinAmount: (amount: number) => void;
  setMineCounter: (amount: number) => void;
  setCurrentCoefficients: (coefficients: number[]) => void;
  setWinRates: (rates: number[]) => void;
};

export const SettingsContext = createContext<SettingsContextType | null>(null);

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const DEFAULT_MINES_SEQUENCE = [
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
  ];
  const [amountOfBombs, setAmountOfBombs] = useState(3);
  const AMOUNT_OF_CELLS = 25;
  const [balance, setBalance] = useState(100);
  const [gameCredit, setGameCredit] = useState(1);
  const [winAmount, setWinAmount] = useState(0);
  const [isGameInitiated, setIsGameInitiated] = useState(false);
  const [minesSequence, setMinesSequence] = useState<TMinesSequence[]>(
    DEFAULT_MINES_SEQUENCE,
  );
  const [mineCounter, setMineCounter] = useState(0);
  const [currentCoefficients, setCurrentCoefficients] = useState<number[]>([
    1.14, 1.3, 1.49, 1.73, 2.02, 2.37, 2.82, 3.38, 4.11, 5.05, 6.32, 8.04,
    10.45, 13.94, 19.17, 27.38, 41.07, 65.71, 115, 230, 575, 2300,
  ]);
  const [winRates, setWinRates] = useState<number[]>([
    1.14, 1.3, 1.49, 1.73, 2.02, 2.37, 2.82, 3.38, 4.11, 5.05, 6.32, 8.04,
    10.45, 13.94, 19.17, 27.38, 41.07, 65.71, 115, 230, 575, 2300,
  ]);

  return (
    <SettingsContext.Provider
      value={{
        AMOUNT_OF_CELLS,
        DEFAULT_MINES_SEQUENCE,
        amountOfBombs,
        balance,
        gameCredit,
        isGameInitiated,
        minesSequence,
        winAmount,
        mineCounter,
        currentCoefficients,
        winRates,
        setAmountOfBombs,
        setBalance,
        setGameCredit,
        setIsGameInitiated,
        setMinesSequence,
        setWinAmount,
        setMineCounter,
        setCurrentCoefficients,
        setWinRates,
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
