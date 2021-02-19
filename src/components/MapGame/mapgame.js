import React from 'react';
import Slider from '../Slider/slider'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import { formateRelative } from "date-fns";
import MapStyle from "./mapstyle";




const libraries = ["places"];
const containerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 50.643909,
    lng: 5.571560,
};
const options = {
    styles: MapStyle
}

function MapGame(props) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: ('AIzaSyDkn_6-4_JcJa7IY41JBIi0ARh7whc-iAI'),
        libraries,
    });
    if (loadError) return "Error loading map";
    if (!isLoaded) return "loading map";

    return (
        <div>
            <Slider user={props.user} />
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            zoom={8}
                            center={center}
                            options={options}
                        ></GoogleMap>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default MapGame;