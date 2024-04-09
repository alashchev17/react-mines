import { shuffleArray, TMinesSequence } from "@/entities/Settings";

type generateMinesSequenceProps = {
  AMOUNT_OF_CELLS: number;
  setMinesSequence: (sequence: TMinesSequence[]) => void;
  amountOfBombs: number;
};

export const generateMinesSequence = ({
  AMOUNT_OF_CELLS,
  setMinesSequence,
  amountOfBombs,
}: generateMinesSequenceProps) => {
  const minesSequence: TMinesSequence[] = [];
  let tempMinesSequence = [...minesSequence];
  let bombsCounter = 0;
  for (let i = 0; i < AMOUNT_OF_CELLS; i++) {
    tempMinesSequence = [
      ...tempMinesSequence,
      {
        id: i,
        isBomb: bombsCounter <= amountOfBombs - 1,
        isRevealed: false,
      },
    ];
    bombsCounter++;
  }
  const shuffledMinesSequence = shuffleArray(tempMinesSequence);
  setMinesSequence(shuffledMinesSequence);
  console.log("tempMinesSequence", shuffledMinesSequence);
  return shuffledMinesSequence;
};
