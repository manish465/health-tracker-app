import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (setInput, event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:8000/api/user/signin", {
                username: username,
                password: password,
            })
            .then((res) => {
                console.log(res.data.msg);
                navigate("/");
            })
            .catch(({ response }) => console.log(response.data.err));
    };

    return (
        <form className="auth">
            <div className="container">
                <h1>LOGIN</h1>
                <input
                    type="text"
                    id="username"
                    placeholder="USERNAME"
                    value={username}
                    onChange={(event) => handleInput(setusername, event)}
                />
                <input
                    type="password"
                    id="pasword1"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(event) => handleInput(setPassword, event)}
                />
                <div className="footer">
                    <Link to="/sign-up">
                        <button>SIGNUP</button>
                    </Link>
                    <button
                        className="primary"
                        onClick={(event) => handleSubmit(event)}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignIn;
