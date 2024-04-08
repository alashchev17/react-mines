import MinesSettingsCSS from "./MinesSettings.module.scss";
import { ChangeBombsAmount } from "@/features/ChangeBombsAmount";
import { ChangeGameCredit } from "@/features/ChangeGameCredit";

export const MinesSettings = () => {
  return (
    <div className={MinesSettingsCSS.container}>
      <ChangeBombsAmount />
      <ChangeGameCredit />
    </div>
  );
};
