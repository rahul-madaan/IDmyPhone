import React from 'react'
import {useNavigate} from "react-router-dom";

export const HomeTableContent = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const bookPickupClick = (e) => {
        e.preventDefault()
        routeChange("/book-pickup")
    }

    return (

        <>
            <tr>
                <th scope="row">1</th>
                <td>{props.linkedDevice.IMEI}</td>
                <td>{props.linkedDevice.manufacturer}</td>
                <td>{props.linkedDevice.model_name}</td>
                <td><button type="button" className="btn btn-outline-success " onClick={bookPickupClick}>Book Pickup</button></td>
                <td><button type="button" className="btn btn-outline-danger ">Report Theft</button></td>
            </tr>
        </>
    )
}