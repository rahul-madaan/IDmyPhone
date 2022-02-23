import React from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const HomeTableContent = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const bookPickupClick = (e) => {
        e.preventDefault()
        fetchDeviceDetails(e)
        routeChange("/book-pickup")
    }

    const fetchDeviceDetails = (e) => {
        console.log(e.target.value)
        axios.get("http://localhost:8000/fetch-device-details/" + e.target.value, {
            'user_aadhaar_number': 0
        }).then((result) => {
            console.log(result)
            if (result.data !== []) {
                props.setSelectedDeviceDetails(result.data[0])
            }
        })
    }

    return (

        <>
            <tr>
                <th scope="row">{props.index + 1}</th>
                <td>{props.linkedDevice.IMEI}</td>
                <td>{props.linkedDevice.manufacturer}</td>
                <td>{props.linkedDevice.model_name}</td>
                <td><button type="button" className="btn btn-outline-success " onClick={bookPickupClick} value={props.linkedDevice.IMEI}>Book Pickup</button></td>
                <td><button type="button" className="btn btn-outline-danger ">Report Loss</button></td>
            </tr>
        </>
    )
}