import { Link } from "react-router-dom";

import BackArrow from "../../assets/svg/backArrow";

import "./headerPage.css";

const HeaderPage = ({
    children,
    useLink = true,
    linkTo = "/dashboard",
    fontSize = "fs-giant",
}) => {
    const classes = `titleArea ff-overpass c-white ${fontSize}`;
    const headerClasses = `${
        useLink ? "headerPageGrid" : "userPageNoGrid"
    } flex-shrink`;

    return (
        <header className={headerClasses}>
            {useLink && (
                <Link to={linkTo}>
                    <BackArrow />
                </Link>
            )}
            <h1 className={classes}>{children}</h1>
        </header>
    );
};

export default HeaderPage;
