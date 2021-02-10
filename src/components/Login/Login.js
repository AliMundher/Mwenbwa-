import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./login.css"

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');

    // Submit Function
    function fun_submit(e) {
        e.preventDefault();
        const userLogin = {
            userName: username,
            password: password
        }
        axios.post("http://localhost:4000/app/login", userLogin)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error)
            });

        setUserName('');
        setPassword('');
    }

    useEffect(() => {
        axios.get("http://localhost:4000/app/login")
            .then(res => {
                console.log(res);
                setOutput(res.data.msg)
            })
            .catch(error => console.log(error))
    })



    return (
        <div>
            <h2 className="mt-5 text-capitalize log_in">log in</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <p>{output}</p>
                    <form onSubmit={fun_submit}>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" required
                                onChange={(e) => setUserName(e.target.value)} name="username" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" required
                                onChange={(e) => setPassword(e.target.value)} name="password" />
                        </div>
                        <button type="submit" className="btn_home">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login