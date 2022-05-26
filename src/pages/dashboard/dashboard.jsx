import { Link } from "react-router-dom";

import HeaderLogo from "../../components/headerLogo/headerLogo";
import IconButton from "../../components/button/iconButton";

import PlayIcon from "../../assets/svg/play";
import ListIcon from "../../assets/svg/list";
import SettingsIcon from "../../assets/svg/settings";
import CertificateIcon from "../../assets/svg/certificate";
import LogoutIcon from "../../assets/svg/logout";

import "./dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <HeaderLogo />
            <main className="dashboardMain gap-25">
                <Link to="/course">
                    <IconButton icon={<PlayIcon />}>
                        Fortsett der du slapp
                    </IconButton>
                </Link>
                <Link to="/course">
                    <IconButton variant="secondary" icon={<ListIcon />}>
                        Kursoversikt
                    </IconButton>
                </Link>
                <Link to="/settings">
                    <IconButton variant="secondary" icon={<SettingsIcon />}>
                        Innstillinger
                    </IconButton>
                </Link>
                <Link to="/certificate">
                    <IconButton variant="secondary" icon={<CertificateIcon />}>
                        Se sertifikat
                    </IconButton>
                </Link>
                <Link to="/">
                    <IconButton variant="secondary" icon={<LogoutIcon />}>
                        Logg ut
                    </IconButton>
                </Link>
            </main>
        </div>
    );
};

export default Dashboard;
