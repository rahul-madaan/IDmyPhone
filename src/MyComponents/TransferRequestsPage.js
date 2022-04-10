import axios from "axios";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {TransferTableContent} from "./TransferTableContent";

export const TransferRequestsPage = (props) => {
    const [transferRequestArray, setTransferRequestArray] = useState([{}])
    const userAadhaarNumber = props.userAadhaarNumber
    const fetchTransferRequests = () => {
        axios.post("http://localhost:8000/fetch-transfer-requests", {
            'user_aadhaar_number': props.userAadhaarNumber
        }).then((result)=>{
            console.log("Fetched transfer requests")
            console.log(result.data)
            setTransferRequestArray(result.data)
        })
    }

    useLayoutEffect(() => {
        fetchTransferRequests()
    }, []);


    return (
        <>
            <div className="container rounded bg-white ">
                <div className="row">
                    <div className="col-md-3">
                        <p>container 1 start</p>
                        <div className="d-flex flex-column  "><img
                            className="rounded-circle mt-5" width="250px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <p className="font-weight-bold">Aadhaar: {props.userAadhaarNumber}</p>
                            <p className="font-weight-bold">Name: {props.userName}</p>
                            <p className="font-weight-bold">Number of Devices: {props.userLinkedDevices.length}</p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <p>container 2 start</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-warning my-2 mx-3">My Buying Requests</button>
                        </div>
                        <h3>Transfer Requests</h3>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Device IMEI</th>
                                <th scope="col">Model Name</th>
                                <th scope="col">Transfer To</th>
                                <th scope="col">Confirm Transfer</th>
                            </tr>
                            </thead>
                            <tbody>
                            {transferRequestArray.map((transferRequestArray,index,userAadhaar) => {
                                return <TransferTableContent transferRequestArray={transferRequestArray} index={index} userAadhaar = {userAadhaarNumber}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
