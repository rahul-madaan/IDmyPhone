import React, {useLayoutEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const HomeTableContent = (props) => {
    const [deleteTransferRequest, setDeleteTransferRequest] = useState('')
    const [deviceIMEI, setDeviceIMEI] = useState()
    const [skipCount, setSkipCount] = useState(true)

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const bookPickupClick = (e) => {
        e.preventDefault()
        fetchDeviceDetails(e)
        routeChange("/book-pickup")
    }

    const fetchDeviceDetails = (e) => {
        console.log(e.target.value)
        props.setUpdateByReportTheft(true)
        axios.get("http://localhost:8000/fetch-device-details/" + e.target.value)
            .then((result) => {
                console.log(result)
            if (result.data !== []) {
                props.setSelectedDeviceDetails(result.data[0])
            }
        })
    }

    const reportTheftClick = (e) => {
        e.preventDefault()
        if(window.confirm("Do you want to report " + e.target.value + " as stolen?")){
            const dict = {
                'IMEI': e.target.getAttribute('data-value2')
            }
            console.log("IMEI OF DEVICE TO BE REPORTED LOST = "+ e.target.value)
            setDeviceIMEI(e.target.value)
            console.log(dict)
            axios.post("http://localhost:8000/report-theft?IMEI="+e.target.value).then(()=>{
                setDeleteTransferRequest(Math.random)
                props.setUpdateLinkedDevices(Math.random())
                console.log("Reported stolen")
                props.setNotificationContent("Phone reported as stolen/lost successfully!")
                props.setNotificationExists(true)
                setTimeout(() => {
                    props.setNotificationContent('')
                    props.setNotificationExists(false)
                }, 3000)
            })

        }
        else{
            console.log("Not reported stolen")
        }
    }

    useLayoutEffect(()=> {
        if (skipCount) setSkipCount(false);
        else if(deleteTransferRequest===''){}
        else if(!skipCount) {
            axios.post("http://localhost:8000/delete-transfer-request?IMEI=" + deviceIMEI)
                .then((result) => {
                    console.log("Executed and deleted the transfer request")
                    setDeleteTransferRequest('')
                })
        }

    },[deleteTransferRequest])


    return (

        <>
            <tr>
                <th scope="row">{props.index + 1}</th>
                <td>{props.linkedDevice.IMEI}</td>
                <td>{props.linkedDevice.manufacturer}</td>
                <td>{props.linkedDevice.model_name}</td>
                <td><button type="button" className="btn btn-outline-success " onClick={bookPickupClick} value={props.linkedDevice.IMEI}>Book Pickup</button></td>
                <td><button type="button" className="btn btn-outline-danger " onClick={reportTheftClick} value={props.linkedDevice.IMEI} data-value-device-name={props.linkedDevice.manufacturer +" " + props.linkedDevice.model_name} >Report Loss</button></td>
            </tr>
        </>
    )
}