import { TMinesSequence } from "@/entities/Settings";

export type TMinesStatistics = {
  isEmpty: boolean;
  isVisible: boolean;
  isLose: boolean; // игра проиграна
  gameCredit: number;
  winAmount: number;
  winRates: number[];
  mineCounter: number;
  minesSequence: TMinesSequence[];
};
