import axios from "axios";
import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";

export const CheckOwnerPage = (props) => {
    const [deviceIMEI,setDeviceIMEI] = useState('')
    const [deviceOwnerAadhaar,setDeviceOwnerAadhaar] = useState('')
    const [deviceOwnerName, setDeviceOwnerName] = useState('')
    const [deviceName, setDeviceName] = useState('')
    const [skipCount, setSkipCount] = useState(true);
    const [skipCount2, setSkipCount2] = useState(true);



    const fetchDeviceOwnerAadhaar = () => {
        axios.post("http://localhost:8000/check-owner?IMEI=" + deviceIMEI)
            .then((result) => {
                setDeviceOwnerAadhaar('')
                setDeviceOwnerAadhaar(result.data[0].owner_aadhaar)
            })

    }

    useLayoutEffect(()=>{
        if (skipCount || deviceOwnerAadhaar === '') setSkipCount(false);
        else if (!skipCount) {
            axios.post("http://localhost:8000/get-user-name", {
                user_aadhaar_number: deviceOwnerAadhaar
            }).then((result) => {
                setDeviceOwnerName('')
                setDeviceOwnerName(result.data[0].name)
            })
        }
    },[deviceOwnerAadhaar])

    useLayoutEffect(()=>{
        if (skipCount2 || deviceOwnerName === '') setSkipCount2(false);
        else if (!skipCount2) {
            console.log("IMEI = " + deviceIMEI)
            console.log("Owner Aadhaar = " + deviceOwnerAadhaar)
            console.log("Owner Name = " + deviceOwnerName)
        }
    },[deviceOwnerName])



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
                                <input type="number" className="form-control" value={deviceIMEI} onChange={(e) => {
                                    setDeviceIMEI(e.target.value)
                                }} placeholder="Enter IMEI of device"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3" onClick={fetchDeviceOwnerAadhaar}>Check Owner
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
