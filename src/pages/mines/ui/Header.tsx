import { Heading } from "@/shared/Heading";
import styles from "./Header.module.scss";
import { useSettings } from "@/entities/Settings";

export const Header = () => {
  const { balance } = useSettings();
  return (
    <div className={styles.container}>
      <Heading text="Mines" level={6} />
      <Heading text={`Balance: ${balance}`} level={6} />
    </div>
  );
};
