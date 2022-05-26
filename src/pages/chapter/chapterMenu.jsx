import { useNavigate } from "react-router-dom";

import HeaderPage from "../../components/headerPage/headerPage";
import IconButton from "../../components/button/iconButton";

import "./chapterMenu.css";

const ChapterMenu = () => {
    const navigate = useNavigate();
    const chapterText =
        "Dette kapittelet består av tre deler og handler om å lage innhold som kan presenteres på forskjellige måter (for eksempel med enklere layout), uten at informasjon eller struktur går tapt";

    const handleClick = () => {
        navigate("/theory");
    };

    return (
        <div className="chapterMenu">
            <HeaderPage linkTo="/course">Mulig å tilpasse</HeaderPage>
            <main className="chapterMenuMain p-top-25">
                <h2 className="ff-overpass fs-default c-white">
                    {chapterText}
                </h2>
                <IconButton onClick={handleClick}>
                    1.3.1 Informasjon og relasjoner
                </IconButton>
                <IconButton>1.3.2 Meningsfylt rekkefølge</IconButton>
                <IconButton>1.3.3 Sensoriske egenskaper</IconButton>
            </main>
        </div>
    );
};

export default ChapterMenu;
