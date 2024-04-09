import styles from "./MinesDesk.module.scss";
import { Mine } from "@/shared/Mine";
import { useSettings } from "@/entities/Settings";

export const MinesDesk = () => {
  const {
    isGameInitiated,
    minesSequence,
    setMinesSequence,
    setIsGameInitiated,
  } = useSettings();
  const handleMineClick = (id: number) => {
    if (!isGameInitiated) return;
    const newMinesSequence = [...minesSequence];
    newMinesSequence[id].isRevealed = true;
    if (newMinesSequence[id].isBomb) {
      setIsGameInitiated(false);
    }
    setMinesSequence(newMinesSequence);
  };
  return (
    <div className={styles["mines-desk"]}>
      {minesSequence.map(({ id, isBomb, isRevealed }) => (
        <Mine
          key={id}
          onClick={() => handleMineClick(id)}
          isRevealed={isRevealed}
          isBomb={isBomb}
        />
      ))}
    </div>
  );
};
