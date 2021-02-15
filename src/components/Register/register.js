import React, { useState, useContext } from 'react'
import axios from 'axios';
import "./register.css";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";



function Register(props) {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    function fun_FullName(e) {
        setFullName(e.target.value);
    }
    function fun_userName(e) {
        setUserName(e.target.value);
    }
    function fun_email(e) {
        setEmail(e.target.value);
    }
    function fun_password(e) {
        setPassword(e.target.value);
    }

    const fun_onSubmit = async (e) => {
        e.preventDefault();
        try {
            const all_var = {
                fullName: fullname,
                userName: username,
                email: email,
                password: password
            }
            await axios.post("http://localhost:4000/app/register", all_var)
                .then(response => {
                    console.log(response.data)
                })

            history.push('/login')

        }
        catch (error) {
            error.response.data.msg && setError(error.response.data.msg)
        }
    };

    return (
        <div>
            <h2 className="mt-5 text-capitalize register">register</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    {
                        error ?
                            <div class="alert alert-danger text-capitalize font-weight-bold" role="alert">
                                {error}
                            </div>
                            : ""

                    }
                    <form onSubmit={fun_onSubmit}>
                        <div className="form-group">
                            <label>FullName</label>
                            <input type="text" className="form-control" value={fullname}
                                onChange={fun_FullName} name="fullname" required />
                        </div>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" value={username}
                                onChange={fun_userName} name="username" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={fun_email} name="email" required />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={fun_password} name="password" required />
                        </div>
                        <button type="submit" className="btn_home">Resgister</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register