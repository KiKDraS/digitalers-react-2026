import { Section } from "../../components/Section";
import { THEME } from "../../features/theme/constants";
import { useThemeContext } from "../../features/theme/context/useThemeContext";
import { ChangeNameForm } from "./components/ChangeNameForm";
import { UpdateTheme } from "./components/UpdateTheme";

export const SettingsPage = () => {
  const { theme, toggleTheme, isLightTheme } = useThemeContext();
  const buttonColor = isLightTheme ? THEME.DARK : THEME.LIGHT;

  return (
    <Section>
      <div className="container">
        <div className="row">
          <ChangeNameForm buttonColor={buttonColor} />
        </div>
        <div className="row my-4">
          <hr />
        </div>
        <div className="row">
          <UpdateTheme
            isLightTheme={isLightTheme}
            theme={theme}
            toggleTheme={toggleTheme}
            buttonColor={buttonColor}
          />
        </div>
      </div>
    </Section>
  );
};
