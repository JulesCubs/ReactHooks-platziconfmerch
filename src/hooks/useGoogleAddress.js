import { useState, useEffect } from 'react'
import axios from 'axios'
import { googleMapsApiKey } from '../../config'

const ENV = googleMapsApiKey

const useGoogleAddress = address => {
    const [map, setMap] = useState({}) 
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${ENV}`

    useEffect( async() => {
        const response = await axios(API)
        setMap(response.data.results[0].geometry.location)
    }, [])

    return map
}

export default useGoogleAddress
