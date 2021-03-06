import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import UserContext from "../../context/UserContext";



function Nav() {
    const { userData, setUserData } = useContext(UserContext);
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        });
        localStorage.setItem("auth-token", "");

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {
                    userData.user ?
                        "" : (<Link to="/" className="navbar-brand">
                            <div>
                                <img src="images/logo1.png" className="img-fluid img_logo" alt="photo" />
                                <span className="logo_text display-4">tr<span className="ee">ee
                                <span className="point"></span> </span></span>
                            </div>
                        </Link>)
                }
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        {
                            userData.user ?
                                (<li className="nav-item">
                                    <Link to="/"
                                        className="nav-link text-capitalize btn_register mr-2"
                                        onClick={logout}>logout
                                    </Link>

                                </li>) :
                                (<>
                                    <li className="nav-item">
                                        <Link to="/register"
                                            className="nav-link text-capitalize btn_register mr-2">register</Link>
                                    </li>
                                    <li className="nav-item green">
                                        <Link to="/login"
                                            className="nav-link  text-capitalize btn-login">log in</Link>
                                    </li>
                                </>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav