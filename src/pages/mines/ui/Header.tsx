import ReactOdometer from "react-odometerjs";

import styles from "./Header.module.scss";

import { useSettings } from "@/entities/Settings";
import { Heading } from "@/shared/Heading";

export const Header = () => {
  const { balance } = useSettings();
  return (
    <div className={styles["container"]}>
      <Heading text="Mines" level={6} />
      <div className={styles["balance"]}>
        <Heading text="Баланс:" level={6} />
        <ReactOdometer
          value={balance}
          format="( ddd),dd"
          style={{ fontWeight: 400, fontSize: "20px" }}
        />
      </div>
    </div>
  );
};
