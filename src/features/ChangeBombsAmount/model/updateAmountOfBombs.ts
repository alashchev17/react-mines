import { COEFFICIENTS, roundToTwoDecimals } from "@/entities/Settings";

export const updateAmountOfBombs = ({
  amount,
  setAmountOfBombs,
  setCurrentCoefficients,
  gameCredit,
  setWinRates,
}: {
  amount: string;
  setAmountOfBombs: (amount: number) => void;
  setCurrentCoefficients: (coefficients: number[]) => void;
  gameCredit: number;
  setWinRates: (rates: number[]) => void;
}) => {
  const coefficientsObject = COEFFICIENTS.find(
    (el) => el.bombs === Number(amount),
  );
  if (!coefficientsObject) return;
  setAmountOfBombs(Number(amount));
  setCurrentCoefficients(coefficientsObject.coefficients);
  setWinRates(
    coefficientsObject.coefficients.map((el) =>
      Number(roundToTwoDecimals(el * gameCredit)),
    ),
  );
};
