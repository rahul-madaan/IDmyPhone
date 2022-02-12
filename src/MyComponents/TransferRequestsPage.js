import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import {TransferTableContent} from "./TransferTableContent";

export const TransferRequestsPage = (props) => {

    const array=[{
        sno:1,
        deviceIMEI:"1234567890",
        deviceManufacturer:"OnePlus",
        deviceName:"9R",
        transferToName:"Rahul",
        transferToAadhaar:"123412341234"
    },
        {
            sno:2,
            deviceIMEI:"345634563456",
            deviceManufacturer:"Samsung",
            deviceName:"Galaxy S21",
            transferToName:"Tushita",
            transferToAadhaar:"123412341234"
        },
        {
            sno:3,
            deviceIMEI:"123412341234",
            deviceManufacturer:"Motorola",
            deviceName:"G3",
            transferToName:"Akshita",
            transferToAadhaar:"123412341234"
        }]

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
                            <p className="font-weight-bold">Number of Devices: {props.numberOfDevices}</p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <p>container 2 start</p>
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
                            {array.map((array) => {
                                return <TransferTableContent array={array}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
