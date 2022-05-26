import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./register.css";

import Button from "../../components/button/button";
import HeaderLogo from "../../components/headerLogo/headerLogo";
import Form from "../../components/form/form";
import Input from "../../components/input/input";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // alert(
        //     "WARNING!!\nDo not use real information in this application. I've spent 0 hours on security. Thanks, have fun :)"
        // );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        let problem = false;

        //Have the user given a name?
        if (name.length === 0) {
            setNameError(true);
            problem = true;
        }
        //Have the user given a email?
        if (email.length === 0) {
            setEmailError(true);
            problem = true;
        } else {
            setEmailError(false);
        }
        //Have the user given a password?
        if (password.length === 0) {
            setPasswordError(true);
            problem = true;
        }
        //Have the user tried to repeat the password?
        if (repeatPassword.length === 0) {
            setRepeatPasswordError(true);
            problem = true;
        }
        //Are the passwords the same?
        if (password !== repeatPassword) {
            setPasswordError(true);
            setRepeatPasswordError(true);
            problem = true;
        }
        //Did any of the checks above fail?
        if (!problem) {
            navigate("/completeRegister", {
                state: { name: name, email: email, password: password },
            });
        }
    };

    return (
        <div className="register">
            <HeaderLogo />
            <main>
                <Form onSubmit={handleSubmit}>
                    <Input
                        error={nameError}
                        setError={setNameError}
                        value={name}
                        setValue={setName}
                        type="text"
                        label="Navn"
                        name="name"
                        required={true}
                    />
                    <Input
                        error={emailError}
                        setError={setEmailError}
                        value={email}
                        setValue={setEmail}
                        type="email"
                        label="Mail"
                        name="mail"
                        required={true}
                    />
                    <Input
                        error={passwordError}
                        setError={setPasswordError}
                        value={password}
                        setValue={setPassword}
                        type="password"
                        label="Passord"
                        name="password"
                        required={true}
                    />
                    <Input
                        error={repeatPasswordError}
                        setError={setRepeatPasswordError}
                        value={repeatPassword}
                        setValue={setRepeatPassword}
                        type="password"
                        label="Gjenta passord"
                        name="password"
                        required={true}
                    />
                    <Button type="submit">Register</Button>
                </Form>
                <Link to="/login">
                    <Button variant="ghost">Logg inn</Button>
                </Link>
            </main>
        </div>
    );
};

export default Register;
