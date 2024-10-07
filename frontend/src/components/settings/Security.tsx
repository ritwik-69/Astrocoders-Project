import { Lock } from "lucide-react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch label={"Two-Factor Authentication"} />
    </SettingSection>
  );
};
export default Security;
