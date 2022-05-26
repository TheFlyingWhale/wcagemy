import { useState } from "react";

import SubChapter from "./subChapter";
import DownArrow from "../../assets/svg/downArrow";

import "./chapterContainer.css";

const ChapterContainer = ({ title, subChapters, children, progression }) => {
    const [displayState, setDisplayState] = useState(false);

    const handleClick = () => {
        setDisplayState(!displayState);
    };

    const bodyClasses = `chapterBody ${
        displayState ? "displayBody" : "hideBody"
    }`;

    const arrowClasses = `${displayState ? "arrowHide" : ""}`;

    return (
        <div className="chapterContainer">
            <button onClick={handleClick} className="chapterHeader c-white">
                <h2 className="ff-overpass fs-default">{title}</h2>
                {progression && (
                    <p className="ff-overpass fs-default fw-medium">
                        {progression}%
                    </p>
                )}
                <DownArrow className={arrowClasses} />
            </button>
            <div className={bodyClasses}>
                {subChapters.map((subChapter) => {
                    return (
                        <SubChapter
                            key={subChapter.id}
                            state={{ completed: subChapter.completed }}
                            linkTo={subChapter.linkTo}
                        >
                            {subChapter.title}
                        </SubChapter>
                    );
                })}
            </div>
        </div>
    );
};

export default ChapterContainer;
