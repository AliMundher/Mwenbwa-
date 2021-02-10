import React, { useState } from 'react'
import axios from 'axios';
import "./register.css"



function Register(props) {
    const [fullname, setFullName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [output, setOutput] = useState([]);

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
        axios.post("http://localhost:4000/app/register", all_var)
            .then(res => console.log(res.data))

        setFullName('');
        setUserName('');
        setEmail('');
        setPassword('');

        // <h1>Created User Name</h1>

    }

    // useEffect(() => {
    //     axios.get("http://localhost:4000/app/register")
    //         .then(res => {
    //             console.log(res);
    //             setOutput(res.data)
    //         })
    //         .catch(error => console.log(error))
    // })


    return (
        <div>
            <h2 className="mt-5 text-capitalize register">register</h2>
            <div className="row mt-5">
                <div className="col-12 col-md-6">

                    {/* <ul>
                        list error
                        {
                            output.length ?
                                output.map(i => <li>{i}</li>) : "  nullll"

                        }
                    </ul> */}

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