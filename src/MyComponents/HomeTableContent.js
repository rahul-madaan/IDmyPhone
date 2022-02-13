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
                <th scope="row">{props.array.sno}</th>
                <td>{props.array.deviceIMEI}</td>
                <td>{props.array.deviceManufacturer}</td>
                <td>{props.array.deviceName}</td>
                <td><button type="button" className="btn btn-outline-success " onClick={bookPickupClick}>Book Pickup</button></td>
                <td><button type="button" className="btn btn-outline-danger ">Report Theft</button></td>
            </tr>
        </>
    )
}