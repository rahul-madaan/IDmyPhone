import React from 'react'

export const MainTableContent = (props) => {
    return (

        <>
            <tr>
                <th scope="row">{props.array.sno}</th>
                <td>{props.array.deviceIMEI}</td>
                <td>{props.array.deviceManufacturer}</td>
                <td>{props.array.deviceName}</td>
                <td><button type="button" className="btn btn-outline-success ">Book Pickup</button></td>
                <td><button type="button" className="btn btn-outline-danger ">Report Theft</button></td>
            </tr>
        </>
    )
}