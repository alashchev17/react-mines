export const updateAmountOfBombs = (
  amount: string,
  setAmountOfBombs: (amount: number) => void,
) => {
  setAmountOfBombs(Number(amount));
};
