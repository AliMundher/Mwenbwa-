import React, { useContext } from 'react';
import Slider from '../Slider/slider'
// import UserContext from "../../context/UserContext";



function MapGame() {
    // const { userData } = useContext(UserContext);
    return (

        <div>
            <Slider />
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <h2 className="ml-4">map</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapGame;