import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

export const RegisterPage = (props) => {
    const [registerAadhaarNumber, setRegisterAadhaarNumber] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [registerUserName, setRegisterUserName] = React.useState("")
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPhoneNumber, setRegisterPhoneNumber] = React.useState("")
    const [showWarning, setShowWarning] = React.useState(false)
    const [warningContent, setWarningContent] = React.useState("")
    const [tempAadhaar, setTempAadhaar] = React.useState("")
    const [tempPhoneNumber, setTempPhoneNumber] = React.useState("")
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        if(registerAadhaarNumber.length !== 12){
            setShowWarning(true)
            setWarningContent("Enter 12 Digit Aadhaar Number!")
        }
        else if(registerUserName === ''){
            setShowWarning(true)
            setWarningContent("Name cannot be blank!")
        }
        else if(registerEmail === ''){
            setShowWarning(true)
            setWarningContent("Email cannot be blank!")
        }
        else if(registerEmail.includes('.') === false || registerEmail.includes('@') === false){
            setShowWarning(true)
            setWarningContent("Email must have . and @")
        }
        else if(registerPhoneNumber.length !== 10){
            setShowWarning(true)
            setWarningContent("Enter a Valid 10 Digit Phone Number!")
        }
        else if(registerPassword.length < 4){
            setShowWarning(true)
            setWarningContent("Password cannot be less than 4 characters!")
        }
        else{
            axios.get("http://localhost:8000/check-aadhaar-validity/" + registerAadhaarNumber)
                .then((res)=>{
                    if(res.data[0].status_code === 1){
                        axios.post("http://localhost:8000/register_user", {
                            'aadhaar_number': registerAadhaarNumber,
                            'password': registerPassword,
                            'user_name': registerUserName,
                            'email': registerEmail,
                            'phone_number': registerPhoneNumber
                        }).then((result) => {
                            console.log(result)
                            routeChange("/login")
                            props.setRegisterSuccessNotif(true)
                            setTimeout(() => {
                                props.setRegisterSuccessNotif(false)
                            }, 4000)
                        })
                    }else{
                        setShowWarning(true)
                        setWarningContent("User already registered!")
                    }
                })

        }
    }

    useEffect(()=>{
        if(registerAadhaarNumber==='0'){
            setRegisterAadhaarNumber('')
        }
        if(registerAadhaarNumber.length===12){
            setTempAadhaar(registerAadhaarNumber)
        }
        if(registerAadhaarNumber.length>12){
            setRegisterAadhaarNumber(tempAadhaar)
        }
    },[registerAadhaarNumber])

    useEffect(()=>{
        if(registerPhoneNumber==='0'){
            setRegisterPhoneNumber('')
        }
        if(registerPhoneNumber.length===10){
            setTempPhoneNumber(registerPhoneNumber)
        }
        if(registerPhoneNumber.length>10){
            setRegisterPhoneNumber(tempPhoneNumber)
        }
    },[registerPhoneNumber])

    return (
        <div className="mx-5">
            <form onSubmit={registerSubmit}>
                <div className="mb-3">
                    <label className="form-label">Aadhaar Number</label>
                    <input type="number" placeholder="Enter 12 Digit Aadhaar Number"  value={registerAadhaarNumber} onChange={(e) => {
                        setRegisterAadhaarNumber(e.target.value)
                    }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your Aadhaar Number with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" placeholder="Enter your full name"  value={registerUserName} onChange={(e) => {
                        setRegisterUserName(e.target.value)
                    }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email ID</label>
                    <input type="text" placeholder="Enter email ID"  value={registerEmail} onChange={(e) => {
                        setRegisterEmail(e.target.value)
                    }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" placeholder="Enter 10 Digit Phone Number"  value={registerPhoneNumber} onChange={(e) => {
                        setRegisterPhoneNumber(e.target.value)
                    }} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" placeholder="Set a new password" value={registerPassword} onChange={(e) => {
                        setRegisterPassword(e.target.value)
                    }} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={registerSubmit}>Register</button>
            </form>
            {showWarning ?
                <div className="alert alert-danger my-3" role="alert">
                    {warningContent}
                </div> : null}
        </div>
    )
}
