import React from 'react'

export const TransferTableContent = (props) => {
    return (

        <>
            <tr>
                <th scope="row">{props.array.sno}</th>
                <td>{props.array.deviceIMEI}</td>
                <td>{props.array.deviceManufacturer+" "+props.array.deviceName}</td>
                <td>{props.array.transferToName+": "+props.array.transferToAadhaar}</td>
                <td><button type="button" className="btn btn-outline-success ">Approve Request</button></td>
            </tr>
        </>
    )
}