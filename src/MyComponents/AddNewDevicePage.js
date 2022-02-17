import axios from "axios";
import React, {useCallback, useState} from "react";

export const AddNewDevicePage = (props) => {

    const [sellerAadhaar, setSellerAadhaar] = useState("")
    const [goodDeviceDetails, setGoodDeviceDetails] = useState({})
    const [IMEIofGood, setIMEIofGood] = useState("")
    const [goodDeviceOwnerDetails, setGoodDeviceOwnerDetails] = useState({})
    const [warningContent, setWarningContent] = React.useState("")
    const [availabilityStatus, setAvailabilityStatus] = useState("")

    const clickCheckAvailability = (e, displayWarningOrResult) => {
        e.preventDefault()
        axios.post("http://localhost:8000/verify-owner", {
            'seller_aadhaar': sellerAadhaar,
            'IMEI': IMEIofGood
        }).then(result => {
            // console.log("result= " + JSON.stringify(result))
            setGoodDeviceDetails(result.data[0])

            axios.post("http://localhost:8000/get-user-name", {
                'user_aadhaar_number': sellerAadhaar
            }).then(res => {
                setGoodDeviceOwnerDetails(res.data[0])
            })
        })
    }

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
                                    onClick={(e) => clickCheckAvailability(e, displayWarningOrResult)}>Check
                                Availability
                            </button>
                        </form>
                        {goodDeviceDetails.status_code !== 0 ?
                            <div className="alert alert-danger" role="alert">
                                {warningContent}
                            </div> :
                            <>
                                <p className="font-weight-bold">Status: Available, Already requested,</p>
                                <p className="font-weight-bold">Owner Name: {goodDeviceOwnerDetails.name}</p>
                                <p className="font-weight-bold">Device: {goodDeviceDetails.manufacturer} {goodDeviceDetails.model_name}</p>
                                <p className="font-weight-bold">IMEI: {goodDeviceDetails.IMEI}</p>

                                <button type="button" className="btn btn-success my-3">Request Transfer</button>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
