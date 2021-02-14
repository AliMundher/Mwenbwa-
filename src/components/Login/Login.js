import React, { useContext, useState } from "react";
import axios from 'axios';
import "./login.css";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    function fun_userName(e) {
        setUserName(e.target.value);
    }
    function fun_password(e) {
        setPassword(e.target.value);
    }

    // Submit Function
    const fun_submit = async (e) => {
        e.preventDefault();
        try {
            const loginRes = await axios.post("http://localhost:4000/app/login", {
                userName: username,
                password: password
            });

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });
            localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');

            setUserName('');
            setPassword('');
        } catch (error) {
            error.response.data.msg && setError(error.response.data.msg)
        }
    }

    return (
        <div>
            <h2 className="mt-5 text-capitalize log_in">log in</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    {
                        error ?
                            <div class="alert alert-danger text-capitalize font-weight-bold" role="alert">
                                {error}
                            </div>
                            : ""

                    }

                    <form onSubmit={fun_submit}>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control"
                                onChange={fun_userName} name="username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"
                                onChange={fun_password} name="password" />
                        </div>
                        <button type="submit" className="btn_home">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login