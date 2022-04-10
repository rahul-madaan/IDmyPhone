import React from 'react'
import axios from "axios";

export const TransferTableContent = (props) => {

    const approveRequest = (e) => {
        e.preventDefault()
        //change phone ownership
        //remove entry of device from transfer_request table
        console.log("value of transfer table content" ,JSON.stringify(e.target.value))
    }

    return (

        <>
            <tr>
                <th scope="row">{props.index +1}</th>
                <td>{props.transferRequestArray.IMEI}</td>
                <td>{props.transferRequestArray.device_name}</td>
                <td>{props.transferRequestArray.buyer_name+": "+props.transferRequestArray.transfer_to_aadhaar}</td>
                <td><button type="button" className="btn btn-outline-success " onClick={approveRequest} value={props.transferRequestArray.IMEI}>Approve Request</button></td>
            </tr>
        </>
    )
}