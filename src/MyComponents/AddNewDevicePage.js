import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";

export const AddNewDevicePage = (props) => {

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
                        <h3>+ Add New Device</h3>
                        <form>
                            <div className="form-group my-2">
                                <label htmlFor="exampleInputEmail1">Seller's e-mail address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter seller's email"/>
                            </div>
                            <div className="form-group my-2">
                                <label htmlFor="exampleInputPassword1">Device Email ID</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Enter IMEI of device being bought"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3">Check Availability</button>
                        </form>

                        <div className="alert alert-danger" role="alert">
                            Warning here
                        </div>

                        <p className="font-weight-bold">Status: Available, Already requested,</p>
                        <p className="font-weight-bold">Owner Name: Dummy Madan</p>
                        <p className="font-weight-bold">Device: Dummy Dum8</p>
                        <p className="font-weight-bold">IMEI: Dummy IMEI</p>

                        <button type="button" className="btn btn-success my-3">Request Transfer</button>
                    </div>
                </div>
            </div>

        </>
    )
}
