import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Register(props) {

    const [fullname, setFullName] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
    function fun_onSubmit(e) {
        e.preventDefault();
        const all_var = {
            fullName: fullname,
            userName: username,
            email: email,
            password: password
        }
        axios.post("http://localhost:4000/app/signup", all_var)
            .then(res => console.log(res.data))

        setFullName('');
        setUserName('');
        setEmail('');
        setPassword('');

    }

    return (
        <div>
            <h2 className="mt-5 text-capitalize">register</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">
                    <form onSubmit={fun_onSubmit}>
                        <div className="form-group">
                            <label>FullName</label>
                            <input type="text" className="form-control" value={fullname}
                                onChange={fun_FullName} name="fullname" />
                        </div>
                        <div className="form-group">
                            <label>UserName</label>
                            <input type="text" className="form-control" value={username}
                                onChange={fun_userName} name="username" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" value={email}
                                onChange={fun_email} name="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" value={password}
                                onChange={fun_password} name="password" />
                        </div>

                        <button type="submit" className="btn btn-primary">Resgister</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register