import React, { createContext, useContext, useState } from "react";

type SettingsContextType = {
  amountOfBombs: number;
  balance: number;
  setAmountOfBombs: (amount: number) => void;
  setBalance: (amount: number) => void;
  gameCredit: number;
  setGameCredit: (amount: number) => void;
};

export const SettingsContext = createContext<SettingsContextType | null>(null);

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [amountOfBombs, setAmountOfBombs] = useState(3);
  const [balance, setBalance] = useState(100);
  const [gameCredit, setGameCredit] = useState(1);

  return (
    <SettingsContext.Provider
      value={{
        amountOfBombs,
        balance,
        gameCredit,
        setAmountOfBombs,
        setBalance,
        setGameCredit,
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
