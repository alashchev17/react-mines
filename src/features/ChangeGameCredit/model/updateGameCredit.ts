import { roundToTwoDecimals } from "@/entities/Settings";

export const updateGameCredit = ({
  amount,
  currentCoefficients,
  setGameCredit,
  setWinRates,
}: {
  amount: number;
  currentCoefficients: number[];
  setGameCredit: (amount: number) => void;
  setCurrentCoefficients: (coefficients: number[]) => void;
  setWinRates: (rates: number[]) => void;
}) => {
  const updatedCoefficientsWithNewGameCredit = currentCoefficients.map((el) =>
    Number(roundToTwoDecimals(el * (amount < 1 ? 1 : amount))),
  );
  setWinRates(updatedCoefficientsWithNewGameCredit);
  setGameCredit(amount < 1 ? 1 : amount);
};
