import React from 'react';
import { useHistory } from "react-router-dom";
import "./slider.css";



function Slider(props) {
    // const history = useHistory();

    const funBuy = () => {
        // history.push("/buy");
        window.open("/buy", "_self");
    }
    const funSetting = () => {
        // history.push("/setting");
        window.open("/setting", "_self");
    }

    return (
        <div className="slider" >
            <div className="img_profile">
                <img src="images/user.png" className="img-fluid" alt="photo" />
            </div>
            <h4 className="name_profile">{props.user}</h4>
            <hr />
            <h3 className="infos text-capitalize ">Some important information:</h3>
            {/*---- Start Tree ----*/}
            <div className="trees">
                <div className="row  ">
                    <div className="col-12 col-md-5 text-center">
                        <img src="images/t2.png" className="img-fluid img_tree" />
                    </div>
                    <div className="col-12 col-md-5 text-right">
                        <h5 className="score">3</h5>
                    </div>
                </div>
                <hr />
                <div className="row  ">
                    <div className="col-12 col-md-5 text-center">
                        <img src="images/l1.png" className="img-fluid img_tree" />
                    </div>
                    <div className="col-12 col-md-5 text-right">
                        <h5 className="score">3</h5>
                    </div>
                </div>
            </div>
            {/*---- End Tree ----*/}
            <hr />
            {/*---- Start Buy ----*/}
            <div className="buy text-center">
                <p>There are many trees that you can buy</p>
                <button className="buy text-capitalize" onClick={funBuy}>buy</button>
            </div>
            {/*---- End Buy ----*/}

            {/*---- Start Setting ----*/}
            <div className="setting">
                <i className="fa fa-cog text-center" aria-hidden="true" onClick={funSetting}></i>
            </div>
            {/*---- End Setting ----*/}



        </div>
    )
}

export default Slider