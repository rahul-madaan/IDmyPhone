import React from 'react'
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    const transferRequestsSwitch = (e) => {
        e.preventDefault()
        routeChange('/transfer-requests')
    }
    const addNewDeviceSwitch = (e) => {
        e.preventDefault()
        routeChange('/add-new-device')
    }
    const homeSwitch = (e) => {
        e.preventDefault()
        routeChange('/home')
    }
    const loginSwitch = (e) => {
        e.preventDefault()
        routeChange('/login')
    }
    return (
        <>
            <nav>
                <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" onClick={homeSwitch}>Home
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" onClick={transferRequestsSwitch}>Transfer Requests
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" onClick={addNewDeviceSwitch}>Add New Device
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" >Check Owner
                        </button>
                    </li>
                </ul>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" className="btn btn-outline-danger my-2 mx-3" onClick={loginSwitch}>Log out</button>
                </div>
            </nav>
        </>
    )
}
