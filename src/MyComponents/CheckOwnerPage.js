import axios from "axios";
import React, {useCallback, useEffect, useState} from "react";

export const CheckOwnerPage = (props) => {
    const [deviceIMEI,setDeviceIMEI] = useState('')

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
                        <h3>Check Owner</h3>
                        <form>
                            <div className="form-group my-2">
                                <label>Device IMEI</label>
                                <input type="text" className="form-control" value={deviceIMEI} onChange={(e) => {
                                    setDeviceIMEI(e.target.value)
                                }} placeholder="Enter IMEI of device"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3">Check Owner
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
