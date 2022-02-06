import React from 'react'

export const LoginPage = (props) => {


    const loginSubmit = (e)=> {
        e.preventDefault()
}


    return (
        <div className="mx-5">
            <form onSubmit={loginSubmit}>
                <div className="mb-3">
                    <label htmlFor="aadhaarNumberInput" className="form-label">Enter Aadhaar Number</label>
                    <input type="number" value={props.aadhaarNumber} onChange={(e)=>{props.setAadhaarNumber(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
