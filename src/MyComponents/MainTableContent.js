import React from 'react'

export const MainTableContent = (props) => {
    return (

        <>
            <tr>
                <th scope="row">{props.array.sno}</th>
                <td>{props.array.deviceManufacturer}</td>
                <td>{props.array.deviceName}</td>
                <td>Delete Button here</td>
            </tr>
        </>
    )
}