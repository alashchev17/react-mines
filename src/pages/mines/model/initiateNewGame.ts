type initiateNewGameProps = {
  setIsGameInitiated: (state: boolean) => void;
  setBalance: (amount: number) => void;
  balance: number;
  gameCredit: number;
};

export const initiateNewGame = ({
  setIsGameInitiated,
  setBalance,
  balance,
  gameCredit,
}: initiateNewGameProps) => {
  setIsGameInitiated(true);
  setBalance(balance - gameCredit);
};
