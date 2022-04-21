import axios from "axios";
import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";

export const CheckOwnerPage = (props) => {
    const [deviceIMEI,setDeviceIMEI] = useState('')
    const [deviceIMEIconstant,setDeviceIMEIconstant] = useState('')
    const [deviceOwnerAadhaar,setDeviceOwnerAadhaar] = useState('')
    const [deviceOwnerName, setDeviceOwnerName] = useState('')
    const [deviceName, setDeviceName] = useState('')
    const [skipCount, setSkipCount] = useState(true);
    const [skipCount0, setSkipCount0] = useState(true);
    const [skipCount2, setSkipCount2] = useState(true);
    const [skipCount3, setSkipCount3] = useState(true);
    const [skipCount4, setSkipCount4] = useState(true);
    const [IMEIValidity, setIMEIValidity] = useState(true);
    const [deviceLostStatus, setDeviceLostStatus] = useState(false);
    const [deviceLostStatusWord, setDeviceLostStatusWord] = useState(false);
    const [warningContent, setWarningContent] = React.useState('')
    const [warningExists, setWarningExists] = React.useState(false)




    const fetchDeviceDetails = () => {
        axios.post("http://localhost:8000/check-owner?IMEI=" + deviceIMEI)
            .then((result) => {
                setDeviceOwnerAadhaar('')
                setDeviceOwnerAadhaar(result.data[0].owner_aadhaar)
                setDeviceIMEIconstant(deviceIMEI)
            })

    }

    useLayoutEffect(()=>{
        if (skipCount0 || deviceOwnerAadhaar === '') setSkipCount0(false);
        else if (!skipCount0) {
            axios.get("http://localhost:8000/check-IMEI-validity/" + deviceIMEI)
                .then((result) => {
                    if(result.data[0].status_code === 1){
                        //Invalid IMEI
                        setWarningExists(true)
                        setWarningContent('Enter valid IMEI Number')
                        setIMEIValidity('')
                    }
                    else if(result.data[0].status_code === 0){
                        //Valid IMEI
                        setWarningExists(false)
                        setWarningContent('')
                        setIMEIValidity(Math.random)
                    }
                })
        }
    },[deviceOwnerAadhaar])


    useLayoutEffect(()=>{
        if (skipCount) setSkipCount(false);
        else if (!skipCount && IMEIValidity !== '') {
            axios.post("http://localhost:8000/get-user-name", {
                user_aadhaar_number: deviceOwnerAadhaar
            }).then((result) => {
                setDeviceOwnerName('')
                setDeviceOwnerName(result.data[0].name)
            })
        }
    },[IMEIValidity])

    useLayoutEffect(()=>{
        if (skipCount2 || deviceOwnerName === '') setSkipCount2(false);
        else if (!skipCount2) {
            axios.get("http://localhost:8000/fetch-device-details/" + deviceIMEI)
                .then((result) => {
                    if (result.data !== []) {
                        setDeviceName('')
                        setDeviceName(result.data[0].manufacturer + " " + result.data[0].model_name)
                    }
                })
        }
    },[deviceOwnerName])

    useLayoutEffect(()=>{
        if (skipCount3 || deviceName === '') setSkipCount3(false);
        else if (!skipCount3) {
            axios.get("http://localhost:8000/check-lost-status/" + deviceIMEI)
                .then((result) => {
                    if(result.data[0].status_code === 1){
                        setDeviceLostStatus('')
                        setDeviceLostStatus(false)
                        setDeviceLostStatusWord("Available with owner")
                    }
                    else if(result.data[0].status_code === 0){
                        setDeviceLostStatus('')
                        setDeviceLostStatus(true)
                        setDeviceLostStatusWord("LOST")
                    }
                })
        }
    },[deviceName])


    useLayoutEffect(()=>{
        if (skipCount4 || deviceLostStatus === '') setSkipCount4(false);
        else if (!skipCount4) {
            console.log("IMEI = " + deviceIMEI)
            console.log("Owner Aadhaar = " + deviceOwnerAadhaar)
            console.log("Owner Name = " + deviceOwnerName)
            console.log("Device Name = " + deviceName)
            console.log("Device Lost Status = " + deviceLostStatus)
        }
    },[deviceLostStatus])





    return (
        <>
            <div className="container rounded bg-white ">
                <div className="row">
                    <div className="col-md-3">
                        <h3>User Profile</h3>
                        <div className="d-flex flex-column  "><img
                            className="rounded-circle mt-5" width="250px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                            <p className="font-weight-bold">Aadhaar: {props.userAadhaarNumber}</p>
                            <p className="font-weight-bold">Name: {props.userName}</p>
                            <p className="font-weight-bold">Number of Devices: {props.userLinkedDevices.length}</p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <h3>Check Owner</h3>
                        <form>
                            <div className="form-group my-2">
                                <label>Device IMEI</label>
                                <input type="number" className="form-control" value={deviceIMEI} onChange={(e) => {
                                    setDeviceIMEI(e.target.value)
                                }} placeholder="Enter IMEI of device"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3" onClick={fetchDeviceDetails}>Check Owner
                            </button>
                            <br/>
                            <br/>
                            <br/>
                            {warningExists ?
                                <div className="alert alert-danger" role="alert">
                                    {warningContent}
                                </div> :
                                <>
                                    <p className="font-weight-bold">Status: {deviceLostStatusWord}</p>
                                    <p className="font-weight-bold">Device IMEI: {deviceIMEIconstant}</p>
                                    <p className="font-weight-bold">Device Name: {deviceName}</p>
                                    <p className="font-weight-bold">Owner Aadhaar Number: {deviceOwnerAadhaar}</p>
                                    <p className="font-weight-bold">Owner Name: {deviceOwnerName}</p>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
