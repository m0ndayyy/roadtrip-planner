import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Map.css'


const Map = () => {
    const mapStyles = {
        width: '100%',
        height: '100vh'
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) {
        return (
            <h1>The Map is Loading...</h1>
        )
    }

    return (
        <GoogleMap zoom={10} center={{lat: 37, lng: -80}} mapContainerStyle={{height: '100vh', width: '100%'}}></GoogleMap>
    );
};

export default Map;
