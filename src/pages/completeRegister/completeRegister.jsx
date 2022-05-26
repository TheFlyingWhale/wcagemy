import { useNavigate, useLocation } from "react-router-dom";

import Container from "../../components/container/container";
import Button from "../../components/button/button";

import "./completeRegister.css";

const CompleteRegister = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login", { state });
    };

    return (
        <div className="completeRegister">
            <header className="completeRegisterHeader">
                <h1 className="ff-overpass c-white fs-giant fw-bold ta-center">
                    Fullfør <br />
                    registrering
                </h1>
            </header>
            <main className="completeRegisterMain">
                <Container className="flex flexDirection-column gap-25">
                    <p className="ff-heebo c-blueDarker fs-default fw-normal body">
                        Velkommen om bord {state.name}! Vi har nå sendt en mail
                        til <span className="fw-medium">{state.email}</span>.
                        Der vil du finne en link du må klikke på for å fullføre
                        registreringen.
                    </p>
                    <Button onClick={handleClick} variant="secondary">
                        Den er grei
                    </Button>
                </Container>
            </main>
        </div>
    );
};

export default CompleteRegister;
