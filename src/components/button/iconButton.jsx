import ArrowIcon from "../../assets/svg/arrow";

import "./iconButton.css";

const IconButton = ({
    variant = "primary",
    icon,
    children,
    onClick,
    withArrow = true,
    alignment = "left",
}) => {
    const classNames = `${variant} iconButton ${
        withArrow ? "" : "withoutArrow"
    }`;
    return (
        <button onClick={onClick} className={classNames}>
            {alignment === "left" ? (
                <>
                    <span
                        className={`iconAndChildren gap-15 ${
                            alignment === "right" && "rightAlignment"
                        }`}
                    >
                        {icon}
                        {children}
                    </span>
                    {withArrow && <ArrowIcon />}
                </>
            ) : (
                <>
                    {children}
                    {icon}
                </>
            )}
        </button>
    );
};

export default IconButton;
