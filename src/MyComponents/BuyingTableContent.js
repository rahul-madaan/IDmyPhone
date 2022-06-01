import React, {useLayoutEffect, useState} from 'react'
import axios from "axios";

export const BuyingTableContent = (props) => {

    const rejectRequest = (e) => {
        e.preventDefault()
        if(window.confirm("Do you want to withdraw the transfer request of " + e.target.getAttribute('data-value-device-name') + " to you?")){
            axios.post("http://localhost:8000/delete-transfer-request?IMEI=" + e.target.value)
                .then((result) => {
                    console.log("Deleted the transfer request")
                    props.setUpdateTransferRequestTable(Math.random())
                })
        }
        else{
            console.log("Delete Transfer Request Not Approved")
        }
    }

    return (

        <>
            <tr>
                <th scope="row">{props.index +1}</th>
                <td>{props.transferRequestArray.IMEI}</td>
                <td>{props.transferRequestArray.device_name}</td>
                <td>{props.transferRequestArray.buyer_name+": "+props.transferRequestArray.transfer_to_aadhaar}</td>
                <td><button type="button" className="btn btn-outline-danger "  onClick={rejectRequest} data-value-buyer={props.transferRequestArray.transfer_to_aadhaar} data-value-device-name={props.transferRequestArray.device_name} data-value-buyer-name={props.transferRequestArray.buyer_name} value={props.transferRequestArray.IMEI}>Withdraw Request</button></td>
            </tr>
        </>
    )
}