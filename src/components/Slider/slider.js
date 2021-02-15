import React, { useContext, useEffect } from 'react';
import UserContext from "../../context/UserContext";
import "./slider.css";



function Slider() {

    // const { userData, setUserData } = useContext(UserContext);

    return (
        <div className="slider">
            <div className="img_profile">
                <img src="images/user.png" className="img-fluid" />
            </div>
            <h4 className="name_profile">asasas sdsdsd</h4>
            <hr />
            <h3 className="infos text-capitalize ">Some important information:</h3>
            {/*---- Start Tree ----*/}
            <div className="tree">
                <div className="row mt-4">
                    <div className="col-12 col-md-5 text-center">
                        <img src="images/t2.png" className="img-fluid img_tree" />
                    </div>
                    <div className="col-12 col-md-5 text-right">
                        <h5 className="score">3</h5>
                    </div>
                </div>
                <hr />
                <div className="row mt-4">
                    <div className="col-12 col-md-5 text-center">
                        <img src="images/l1.png" className="img-fluid img_tree" />
                    </div>
                    <div className="col-12 col-md-5 text-right">
                        <h5 className="score">3</h5>
                    </div>
                </div>
            </div>
            {/*---- End Tree ----*/}

            {/*---- Start Setting ----*/}
            <div className="setting">
                <i class="fa fa-cog text-center" aria-hidden="true"></i>
            </div>
            {/*---- End Setting ----*/}

        </div>
    )
}

export default Slider