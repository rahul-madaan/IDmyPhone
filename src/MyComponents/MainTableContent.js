import React from 'react'

export const MainTableContent = (props) => {
    return (

        <>
            <tr>
                <th scope="row">{props.array.sno}</th>
                <td>{props.array.deviceIMEI}</td>
                <td>{props.array.deviceManufacturer}</td>
                <td>{props.array.deviceName}</td>
                <td><button type="button" className="btn btn-outline-danger ">Remove</button></td>
            </tr>
        </>
    )
}