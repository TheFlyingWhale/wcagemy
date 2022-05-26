import loginLogo from "../../assets/svg/logo.svg";
import "./headerLogo.css";

const HeaderLogo = () => {
    return (
        <header>
            <img src={loginLogo} alt="WCAGemy" />
        </header>
    );
};

export default HeaderLogo;
