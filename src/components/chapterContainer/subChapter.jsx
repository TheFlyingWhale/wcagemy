import { Link } from "react-router-dom";

import ArrowIcon from "../../assets/svg/arrow";
import CheckIcon from "../../assets/svg/check";

import "./subChapter.css";

const SubChapter = ({
    children,
    state = { completed: false },
    linkTo = "/course",
}) => {
    const classes = `subChapter ff-overpass fs-default fw-semiBold ${
        state.completed && "completed"
    }`;

    const fillColor = "#1b3882";

    return (
        <Link to={linkTo}>
            <div className={classes}>
                {children}
                {state.completed ? (
                    <CheckIcon fill={fillColor} />
                ) : (
                    <ArrowIcon fill={fillColor} />
                )}
            </div>
        </Link>
    );
};

export default SubChapter;
