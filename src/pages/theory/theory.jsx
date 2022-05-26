import { useNavigate } from "react-router-dom";

import SpotifyIcon from "../../assets/svg/spotify";

import HeaderPage from "../../components/headerPage/headerPage";
import IconButton from "../../components/button/iconButton";

const Theory = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/quiz");
    };

    return (
        <div className="Theory">
            <HeaderPage fontSize="fs-default">
                1.3.1 Informasjon og relasjoner
            </HeaderPage>
            <main className="theoryMain p-top-25 flex gap-25 flexDirection-column">
                <h2 className="fs-large ff-heebo c-white fw-medium">
                    KORT FORTALT: Ting skal være kodet som det ser ut som.
                </h2>
                <p className="ff-heebo c-white fw-normal fs-default">
                    Informasjon, struktur og relasjoner som formidles via
                    presentasjonen, kan bestemmes programmeringsmessig eller
                    gjøres tilgjengelig(e) som tekst.
                </p>
                <a
                    href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html"
                    className="ff-overpass c-white fw-bold linkDecoration"
                >
                    Forstå 1.3.1 Informasjon og relasjoner
                </a>
                <iframe
                    width="100%"
                    src="https://www.youtube.com/embed/rIebSHUZz_w"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <IconButton icon={<SpotifyIcon />} variant="secondary">
                    Podkast
                </IconButton>
                <IconButton onClick={handleClick}>Ta quizen</IconButton>
            </main>
        </div>
    );
};

export default Theory;
