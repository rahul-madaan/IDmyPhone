import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export const LoginPage = (props) => {
    const [showWarning, setWarning] = React.useState(false)
    const [warningContent, setWarningContent] = React.useState("")
    const [tempAadhaar, setTempAadhaar] = React.useState('')
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const loginSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", {
            'aadhaar_number': props.aadhaarNumber,
            'password': props.password
        }).then((result) => {
            if (result.data.statusCode === 0) {
                setWarning(false)
                props.setUserAadhaarNumber(props.aadhaarNumber)
                routeChange('/home')
            } else if (result.data.statusCode === 1) {
                console.log("Passwords do not match")
                setWarningContent("You entered Incorrect Password")
                setWarning(true)
            } else if (result.data.statusCode === 2) {
                setWarningContent("User is not registered")
                setWarning(true)
            }
        })
    }

    useEffect(()=>{
        if(props.aadhaarNumber==='0'){
            props.setAadhaarNumber('')
        }
        if(props.aadhaarNumber.length===12){
            setTempAadhaar(props.aadhaarNumber)
        }
        if(props.aadhaarNumber.length>12){
            props.setAadhaarNumber(tempAadhaar)
        }
    },[props.aadhaarNumber])

    return (
        <div className="mx-5">
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                    <label htmlFor="aadhaarNumberInput" className="form-label">Enter Aadhaar Number</label>
                    <input type="number" value={props.aadhaarNumber} onChange={(e) => {
                        props.setAadhaarNumber(e.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your Aadhaar Number with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={props.password} onChange={(e) => {
                        props.setPassword(e.target.value)
                    }} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
            </form>
            {showWarning ?
                <div className="alert alert-danger" role="alert">
                    {warningContent}
                </div> : null}
            {props.registerSuccessNotif ?
                <div className="alert alert-success" role="alert">
                    Successfully Registered New User!
                </div> : null}
        </div>
    )
}
