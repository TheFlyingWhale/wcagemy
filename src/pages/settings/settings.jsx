import HeaderPage from "../../components/headerPage/headerPage";
import IconButton from "../../components/button/iconButton";

import ProfileIcon from "../../assets/svg/profile";
import PasswordIcon from "../../assets/svg/password";
import DevicesIcon from "../../assets/svg/devices";
import AccessibilityIcon from "../../assets/svg/accessibility";

const Settings = () => {
    return (
        <div className="settings">
            <HeaderPage>Innstillinger</HeaderPage>
            <main className="settingsMain flex flexDirection-column p-top-25 gap-25">
                <IconButton icon={<ProfileIcon />}>Profil</IconButton>
                <IconButton icon={<PasswordIcon />}>Passord</IconButton>
                <IconButton icon={<DevicesIcon />}>Kurs</IconButton>
                <IconButton icon={<AccessibilityIcon />}>
                    Tilgjengelighet
                </IconButton>
            </main>
        </div>
    );
};

export default Settings;
