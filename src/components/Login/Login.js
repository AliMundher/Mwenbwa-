import React, { useState } from 'react'
import axios from 'axios';


function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Submit Function
    function fun_submit(e) {
        e.preventDefault();
        const login = {
            userName: username,
            password: password
        }
        axios.post("http://localhost:4000/app/login", login)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error)
            })

        setUserName('');
        setPassword('');
    }

    // UserName Function
    // function fun_userName(e) {
    //     setUserName(e.target.value)
    // }

    // Password Function
    // function fun_password(e) {
    //     setPassword(e.target.value)
    // }

    return (
        <div>
            <h2 className="mt-5 text-capitalize">log in</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
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
                        <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login