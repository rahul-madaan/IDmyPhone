import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import {HomeTableContent} from "./HomeTableContent";
import PhoneImage from "../MyPhotos/image-removebg-preview.png"
import {SplitButton, Dropdown, Button, ButtonGroup} from "react-bootstrap";

export const BookPickupPage = (props) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const homeClick = (e) => {
        e.preventDefault()
        routeChange("/home")
    }

    return (
        <>
            <div className="container bg-white ">
                <div className="row">
                    <div className="col-md-3">
                        <p>container 1 start</p>
                        <button type="button" className="btn btn-outline-dark" onClick={homeClick}>Back to Home</button>
                        <div className="d-flex flex-column  "><img
                            className=" mt-5 mt-5" width="250px"
                            src={PhoneImage}/>
                            <p className="font-weight-bold">Manufacturer: {props.selectedDeviceDetails.manufacturer}</p>
                            <p className="font-weight-bold">Model: {props.selectedDeviceDetails.model_name}</p>
                            <p className="font-weight-bold">Device IMEI: {props.selectedDeviceDetails.IMEI} </p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <p>container 2 start</p>
                        <h3>Book Pickup</h3>
                        <h5>Enter Address</h5>
                        <form>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control"
                                       placeholder="Enter Address"/>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="Number" className="form-control"
                                       placeholder="Enter State"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">City</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"
                                       placeholder="Enter City"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">PINCODE</label>
                                <input type="Number" className="form-control" id="exampleInputPassword1"
                                       placeholder="Enter PINCODE"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3">Request Pickup</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
