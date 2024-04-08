import styles from "./MinesPage.module.scss";
import { Header } from "./Header";

import { MinesSettings } from "@/widgets/MinesSettings";
import { SettingsProvider } from "@/entities/Settings";
import { Button } from "@/shared/Button";

export const MinesPage = () => {
  return (
    <div className={styles.container}>
      <SettingsProvider>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles["column-wrapper"]}>
            <div className={styles["column-wrapper__item"]}>
              {/* Место для виджета настройки игры */}
              <MinesSettings />
              <Button>Начать игру</Button>
            </div>
            <div className={styles["column-wrapper__item"]}>
              {/* Место для виджета с игрой */}
            </div>
          </div>
        </div>
      </SettingsProvider>
    </div>
  );
};
