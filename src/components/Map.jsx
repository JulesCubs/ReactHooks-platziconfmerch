import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { googleMapsApiKey } from '../../config'

const ENV = googleMapsApiKey

const Map = ({data}) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 19.4525486, lng: -99.15754534
        // lat: data.lat, 
        // lng: data.lng
    }

    return (
        <LoadScript googleMapsApiKey={ENV}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={9}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map