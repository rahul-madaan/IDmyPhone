import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import {MainTableContent} from "./MainTableContent";

export const BookPickupPage = (props) => {

    return (
        <>
            <div className="container rounded bg-white ">
                <div className="row">
                    <div className="col-md-3">
                        <p>container 1 start</p>
                        <div className="d-flex flex-column  "><img
                            className="rounded-circle mt-5 mt-5" width="250px"
                            src="../MyPhotos/androidPhone.png"/>
                            <p className="font-weight-bold">Manufacturer: {props.userAadhaarNumber}</p>
                            <p className="font-weight-bold">Model: {props.userName}</p>
                            <p className="font-weight-bold">Device IMEI: </p>
                            <p className="font-weight-bold">Purchase Date: </p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <p>container 2 start</p>
                        <h3>Linked Devices</h3>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Device IMEI</th>
                                <th scope="col">Manufacturer</th>
                                <th scope="col">Model Name</th>
                                <th scope="col">Recycle Device</th>
                                <th scope="col">Report Theft</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
