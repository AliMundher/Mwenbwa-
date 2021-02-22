import React, { useEffect, useState } from 'react';
import $ from "jquery";
import "./setting.css";


const setting = () => {

    const [isTrue, setIsTrue] = useState(false);

    useEffect(() => {
        $('.exit').on('click', () => {
            $('.main_setting').hide()
        })
    }, []);

    const SubmitFun = (e) => {
        e.preventDefault();
    }

    return (
        <div className="main_setting">
            <span className="exit">&times;</span>
            <h2 className="text-capitalize ml-3 mb-5 text-center u_profile">update your profile</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <form onSubmit={SubmitFun}>
                            {/* First Ros Input */}
                            <div className="form-row">
                                <div className="col">
                                    <label>UserName</label>
                                    <input type="text" className="form-control username"
                                        name="username" required />
                                </div>

                                <div className="col">
                                    <label>Email</label>
                                    <input type="text" className="form-control email"
                                        name="email" required />
                                </div>
                            </div>
                            {/* Seconde Ros Input */}
                            <div className="form-row mt-4">
                                <div className="col">
                                    <label>Password</label>
                                    <input type="text" className="form-control password"
                                        name="password" required />
                                </div>

                                <div className="col">
                                    <label>Re-Password</label>
                                    <input type="text" className="form-control re-password"
                                        name="re-password" required />
                                </div>
                            </div>
                            <button className="text-capitalize mt-3 btn_update">update</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default setting
