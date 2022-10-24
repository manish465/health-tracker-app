import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const [username, setusername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const handleInput = (setInput, event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password1 === password2) {
            axios
                .post("http://localhost:8000/api/user/signup", {
                    username: username,
                    password: password1,
                })
                .then((res) => {
                    console.log(res.data.msg);
                    navigate("/sing-in");
                })
                .catch(({ response }) => console.log(response.data.err));
        } else alert("enter all the required feilds");
    };

    return (
        <form className="auth">
            <div className="container">
                <h1>SIGNUP</h1>
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
                    value={password1}
                    onChange={(event) => handleInput(setPassword1, event)}
                />
                <input
                    type="password"
                    id="pasword2"
                    placeholder="PASSWORD AGAIN"
                    value={password2}
                    onChange={(event) => handleInput(setPassword2, event)}
                />
                <div className="footer">
                    <Link to="/sign-in">
                        <button>LOGIN</button>
                    </Link>
                    <button
                        className="primary"
                        onClick={(event) => handleSubmit(event)}
                    >
                        SIGNUP
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
