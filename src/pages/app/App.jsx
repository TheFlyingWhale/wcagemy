import { Link } from "react-router-dom";

import "./App.css";
import Button from "../../components/button/button";
import HeaderLogo from "../../components/headerLogo/headerLogo";

function App() {
    return (
        <div className="App">
            <HeaderLogo></HeaderLogo>
            <main className="appMain">
                <Link to="login">
                    <Button>Logg inn</Button>
                </Link>
                <Link to="register">
                    <Button variant="secondary">Registrer ny bruker</Button>
                </Link>
            </main>
        </div>
    );
}

export default App;
