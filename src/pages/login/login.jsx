import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./login.css";

import Button from "../../components/button/button";
import HeaderLogo from "../../components/headerLogo/headerLogo";
import Form from "../../components/form/form";
import Input from "../../components/input/input";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        let problem = false;

        if (email.length === 0) {
            setEmailError(true);
            problem = true;
        }
        if (password.length === 0) {
            setPasswordError(true);
            problem = true;
        }
        if (state !== null) {
            if (email !== state.email) {
                problem = true;
            }
            if (password !== state.password) {
                setPasswordError(true);
                problem = true;
            }
        }
        if (!problem) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="login">
            <HeaderLogo />
            <main className="loginMain">
                <Form onSubmit={handleSubmit}>
                    <Input
                        error={emailError}
                        value={email}
                        setError={setEmailError}
                        setValue={setEmail}
                        type="email"
                        label="Mail"
                        name="mail"
                        required={true}
                    />
                    <Input
                        error={passwordError}
                        value={password}
                        setError={setPasswordError}
                        setValue={setPassword}
                        type="password"
                        label="Passord"
                        name="password"
                        required={true}
                    />
                    <Button type="submit">Logg inn</Button>
                </Form>
                <Link to="/register">
                    <Button variant="ghost">Registrer</Button>
                </Link>
            </main>
        </div>
    );
};

export default Login;
