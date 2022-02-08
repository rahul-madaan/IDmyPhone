import axios from "axios";
import {useNavigate} from "react-router-dom";
import React from "react";

export const RegisterPage = () => {
    const [showWarning, setWarning] = React.useState(false)
    const [warningContent, setWarningContent] = React.useState("")
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const registerSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", {"":""
        }).then((result) => {
            console.log(result)
        })
    }
    // if(localStorage has login data then redirect/return to home)

    return (
        <div className="mx-5">
            <form onSubmit={registerSubmit}>
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
        </div>
    )
}