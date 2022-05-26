import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import PhoneImage from "../MyPhotos/image-removebg-preview.png"

export const BookPickupPage = (props) => {
    const [raiseBookPickupStatusError, setRaiseBookPickupStatusFoundError] = useState(false)
    const [pickupAddress, setPickupAddress] = useState('')
    const [pickupCity, setPickupCity] = useState('')
    const [pickupState, setPickupState] = useState('')
    const [pickupPincode, setPickupPincode] = useState('')
    const [requestCompleted, setRequestCompleted] = useState(false)
    const [tempPIN, setTempPIN] = useState('')

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const homeClick = (e) => {
        e.preventDefault()
        routeChange("/home")
    }

    const bookPickupClick = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/book-pickup-entry", {
            'IMEI': props.selectedDeviceDetails.IMEI,
            'address': pickupAddress,
            'state' : pickupState,
            'city': pickupCity,
            'pincode': pickupPincode,
            'landmark': 'Near Mother Dairy'
        }).then(()=>{
            setRequestCompleted(true)
        })
    }

    useEffect(()=>{
        if(pickupPincode==='0'){
            setPickupPincode('')
        }
        if(pickupPincode.length===6){
            setTempPIN(pickupPincode)
        }
        if(pickupPincode.length>6){
            setPickupPincode(tempPIN)
        }
    },[pickupPincode])

    useEffect(()=>{
        axios.get("http://localhost:8000/book-pickup-status/" + props.selectedDeviceDetails.IMEI).then(res => {
            console.log("returned data book pickup status API= " + JSON.stringify(res.data))
            if(res.data.status_code === 0){
                console.log("Found in DB, raise ERROR")
                setRaiseBookPickupStatusFoundError(true)
            }
            else if(res.data.status_code === 1){
                console.log("Not found in DB show fields")
                setRaiseBookPickupStatusFoundError(false)
            }
        })
    },[props.selectedDeviceDetails.IMEI])


    return (
        <>
            <div className="container bg-white ">
                <div className="row">
                    <div className="col-md-3">
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
                        <h3>Book Pickup</h3>
                        {raiseBookPickupStatusError? <div className="alert alert-danger" role="alert">
                                Already booked
                            </div>: requestCompleted ?
                            <div className="alert alert-success" role="alert">Pickup Booked Successfully</div>:
                            <>
                            <h5>Enter Address</h5>
                        <form>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" className="form-control"
                                       placeholder="Enter Address" value={pickupAddress} onChange={(e) => {
                                    setPickupAddress(e.target.value)
                                }}/>
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text" className="form-control"
                                       placeholder="Enter State" value={pickupState} onChange={(e) => {
                                    setPickupState(e.target.value)
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">City</label>
                                <input type="text" className="form-control" id="exampleInputPassword1"
                                       placeholder="Enter City" value={pickupCity} onChange={(e) => {
                                    setPickupCity(e.target.value)
                                }}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">PINCODE</label>
                                <input type="Number" className="form-control"
                                       placeholder="Enter PINCODE" value={pickupPincode} onChange={(e) => {
                                    setPickupPincode(e.target.value)
                                }}/>
                            </div>
                            <button type="button" className="btn btn-warning my-3" onClick={bookPickupClick}>Request Pickup</button>
                        </form></>}
                    </div>
                </div>
            </div>

        </>
    )
}
