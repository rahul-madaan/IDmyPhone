import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";
import {MainTableContent} from "./MainTableContent";

export const HomePage = (props) => {
    const [numberOfDevices, setNumberOfDevices] = React.useState(0)

    const array=[{
        sno:1,
        deviceManufacturer:"OnePlus",
        deviceName:"9R"
        },
        {
            sno:2,
            deviceManufacturer:"Samsung",
            deviceName:"Galaxy S21"
        },
        {
            sno:3,
            deviceManufacturer:"Motorola",
            deviceName:"G3"
        }]

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
                            <p className="font-weight-bold">Number of Devices: {numberOfDevices}</p>
                        </div>
                    </div>
                    <div className="col align-items-centre">
                        <p>container 2 start</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-outline-primary my-2 my-sm-0">Transfer Requests</button>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            {array.map((array) => {
                                return <MainTableContent array={array}/>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
