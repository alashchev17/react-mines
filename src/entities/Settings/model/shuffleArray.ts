import { TMinesSequence } from "@/entities/Settings";

export const shuffleArray = (arr: TMinesSequence[]) => {
  const shuffledArr = [...arr]; // Create a copy of the original array
  const idOrder = arr.map((obj) => obj.id); // Create an array to store the order of ids

  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  // Restore the order of ids in the shuffled array
  for (let i = 0; i < shuffledArr.length; i++) {
    shuffledArr[i].id = idOrder[i];
  }

  return shuffledArr;
};
