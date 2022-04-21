import axios from "axios";
import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

export const AddNewDevicePage = (props) => {

    const [sellerAadhaar, setSellerAadhaar] = useState('')
    const [goodDeviceDetails, setGoodDeviceDetails] = useState({})
    const [IMEIofGood, setIMEIofGood] = useState('')
    const [goodDeviceOwnerDetails, setGoodDeviceOwnerDetails] = useState({})
    const [warningContent, setWarningContent] = React.useState('')
    const [warningExists, setWarningExists] = React.useState(false)
    const [skipCount, setSkipCount] = useState(true);
    const [skipCount2, setSkipCount2] = useState(true);
    const [skipCount3, setSkipCount3] = useState(true);
    const [skipCount4, setSkipCount4] = useState(true);
    const [deviceTransferStatus, setDeviceTransferStatus] = useState(false);
    const [deviceLostStatus, setDeviceLostStatus] = useState('');
    const [aadhaarValidity, setAadhaarValidity] = useState('');
    const [deviceFinalStatus, setDeviceFinalStatus] = useState('');
    const [requestTransferButtonDisabled, setRequestTransferButtonDisabled] = useState(true);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    const clickRequestTransfer = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/create-transfer-request", {
            'buyer_aadhaar': props.userAadhaarNumber,
            'seller_aadhaar': sellerAadhaar,
            'IMEI': IMEIofGood,
            'buyer_name': props.userName,
            'device_name': goodDeviceDetails.manufacturer + goodDeviceDetails.model_name
        }).then(result => {
            console.log(result)
            setRequestTransferButtonDisabled(true)
            setShowSuccessNotification(true)
            setDeviceFinalStatus("Requested Successfully by you")
            setTimeout(() => {
                setShowSuccessNotification(false)
            }, 3000)
        })
    }

    const clickCheckAvailability = (e) => {
        e.preventDefault()
        axios.get("http://localhost:8000/check-aadhaar-validity/" + sellerAadhaar)
            .then((result) => {
                if(result.data[0].status_code === 1){
                    setWarningExists(true)
                    setWarningContent('Enter valid Aadhaar Number')
                }
                else if(result.data[0].status_code === 0){
                    setAadhaarValidity('')
                    setAadhaarValidity(true)
                    setWarningExists(false)
                    setWarningContent('')
                }
            })
    }

    useLayoutEffect(()=>{
        if (skipCount) setSkipCount(false);
        else if(aadhaarValidity === '') {}
        else if (!skipCount) {
            if(aadhaarValidity) {
                axios.post("http://localhost:8000/verify-owner", {
                    'seller_aadhaar': sellerAadhaar,
                    'IMEI': IMEIofGood
                }).then(result => {
                    if(result.data[0].status_code === 1){
                        setWarningExists(true)
                        setWarningContent('Enter valid Device IMEI')
                    }
                    else if (result.data[0].status_code === 0){
                        setWarningExists(false)
                        setWarningContent('')
                        setGoodDeviceDetails(result.data[0])
                    }
                    else if (result.data[0].status_code === 2){
                        setWarningExists(true)
                        setWarningContent('Device not owned by entered Aadhaar')
                    }
                })
            }
        }
    },[aadhaarValidity])

    useLayoutEffect(()=>{
        if (skipCount) setSkipCount(false);
        else if(goodDeviceDetails === {}) {}
        else if (!skipCount) {
            console.log("GET USER NAME API CALLED")
            axios.post("http://localhost:8000/get-user-name/", {
                'user_aadhaar_number': sellerAadhaar
            }).then(res => {
                if(props.userAadhaarNumber === sellerAadhaar){
                    setWarningExists(true)
                    setWarningContent('Cannot request to buy own device')
                }
                else if(props.userAadhaarNumber !== sellerAadhaar){
                    setWarningExists(false)
                    setWarningContent('')
                    setGoodDeviceOwnerDetails(res.data[0])
                }
            })
        }
    },[goodDeviceDetails])


    useLayoutEffect(()=>{
        //check theft status
        if (skipCount2) setSkipCount2(false);
        else if(goodDeviceOwnerDetails === {}) {}
        else if (!skipCount2) {
            axios.post("http://localhost:8000/get-transfer-request-by-IMEI/" + IMEIofGood)
                .then((result) => {
                    if(result.data[0].status_code === 1){
                        setDeviceTransferStatus('')
                        setDeviceTransferStatus(false)
                        setDeviceFinalStatus('Available')
                        setRequestTransferButtonDisabled(false)
                    }
                    else if(result.data[0].status_code === 0){
                        setDeviceTransferStatus('')
                        setDeviceTransferStatus(true)
                        setDeviceFinalStatus('Already requested by someone')
                        setRequestTransferButtonDisabled(true)
                    }
                })
        }
    },[goodDeviceOwnerDetails])


    useLayoutEffect(()=>{
        //check transfer request status
        if (skipCount3 || deviceTransferStatus === '') setSkipCount3(false);
        else if (!skipCount3) {
            axios.get("http://localhost:8000/check-lost-status/" + IMEIofGood)
                .then((result) => {
                    if(result.data[0].status_code === 1){
                        setDeviceLostStatus(false)
                    }
                    else if(result.data[0].status_code === 0){
                        setDeviceLostStatus(true)
                        setDeviceFinalStatus('Device Lost')
                        setRequestTransferButtonDisabled(true)

                    }
                })
        }
    },[deviceTransferStatus])


    useLayoutEffect(()=>{
        if (skipCount4 || goodDeviceOwnerDetails === {}) setSkipCount4(false);
        else if (!skipCount4) {
            console.log("DEVICE DETAILS = " + JSON.stringify(goodDeviceDetails))
            console.log("DEVICE OWNER DETAILS = " + JSON.stringify(goodDeviceOwnerDetails))
            console.log("DEVICE TRANSFER STATUS = " + deviceTransferStatus)
            console.log("DEVICE LOST STATUS = " + deviceLostStatus)
            console.log("AADHAAR VALIDITY = " + aadhaarValidity)
        }
    },[goodDeviceOwnerDetails])


    return (
        <>
            <div className="container rounded bg-white ">
                <div className="row">
                    <div className="col-md-3">
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
                        <h3>+ Buy New Device</h3>
                        <form>
                            <div className="form-group my-2">
                                <label>Seller's Aadhaar Number</label>
                                <input type="text" className="form-control" value={sellerAadhaar} onChange={(e) => {
                                    setSellerAadhaar(e.target.value)
                                }} placeholder="Enter seller's Aadhaar Number"/>
                            </div>
                            <div className="form-group my-2">
                                <label>Device IMEI</label>
                                <input type="text" className="form-control"
                                       value={IMEIofGood} onChange={(e) => {
                                    setIMEIofGood(e.target.value)
                                }} placeholder="Enter IMEI of device being bought"/>
                            </div>
                            <button type="button" className="btn btn-warning my-3"
                                    onClick={clickCheckAvailability}>Check Availability
                            </button>
                        </form>
                        {warningExists?
                            <div className="alert alert-danger" role="alert">
                                {warningContent}
                            </div> :
                            <>
                                <p className="font-weight-bold">Status: {deviceFinalStatus}</p>
                                <p className="font-weight-bold">Owner Name: {goodDeviceOwnerDetails.name}</p>
                                <p className="font-weight-bold">Device: {goodDeviceDetails.manufacturer} {goodDeviceDetails.model_name}</p>
                                <p className="font-weight-bold">IMEI: {goodDeviceDetails.IMEI}</p>

                                <button type="button" className="btn btn-success my-3" disabled={requestTransferButtonDisabled} onClick={clickRequestTransfer}>Request Transfer</button>
                            </>
                            }
                        {showSuccessNotification ?
                            <div className="alert alert-success" role="alert">
                                Successfully Requested Device from owner
                            </div>
                            :null
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
