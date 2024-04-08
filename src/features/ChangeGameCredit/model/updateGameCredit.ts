export const updateGameCredit = (
  amount: number,
  setGameCredit: (amount: number) => void,
) => {
  setGameCredit(amount < 1 ? 1 : amount);
};
