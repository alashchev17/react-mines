import { MinesPage } from "@/pages/mines";
import { SettingsProvider } from "@/entities/Settings";
export const App = () => {
  return (
    <div className="app">
      <SettingsProvider>
        <MinesPage />
      </SettingsProvider>
    </div>
  );
};
