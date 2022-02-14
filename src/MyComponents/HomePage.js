import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useLayoutEffect, useState} from "react";
import {HomeTableContent} from "./HomeTableContent";




export const HomePage = (props) => {

    const [selectedDeviceDetails, setSelectedDeviceDetails] = useState({})


    const fetchLinkedDevices = (userAadhaarNumber,updateUserName) => {
        axios.post("http://localhost:8000/get-linked-devices", {
            'user_aadhaar_number': userAadhaarNumber
        }).then((result) => {
            console.log(result)
            if (result.data) {
                props.setUserLinkedDevices(result.data)
            }
            updateUserName(userAadhaarNumber)
        })
    }

    const updateUserName = (userAadhaarNumber) => {
        axios.post("http://localhost:8000/get-user-name", {
            'user_aadhaar_number': userAadhaarNumber
        }).then((result) => {
            console.log(result)
            if (result.data) {
                props.setUserName(result.data[0].name)
            }
        })
    }

    const fetchDeviceDetails = (IMEI) => {
        axios.post("http://localhost:8000/fetch-device-details/" + IMEI, {
            'user_aadhaar_number': 0
        }).then((result) => {
            console.log(result)
            if (result.data !== []) {
                setSelectedDeviceDetails(result.data[0])
            }
        })
    }


    useLayoutEffect(() => {
        fetchLinkedDevices(props.userAadhaarNumber,updateUserName)
    }, []);




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
                            <tbody>
                            {props.userLinkedDevices.map((linkedDevice,index) => {
                                return <HomeTableContent linkedDevice={linkedDevice} index={index} setSelectedDeviceDetails={setSelectedDeviceDetails}  />
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
