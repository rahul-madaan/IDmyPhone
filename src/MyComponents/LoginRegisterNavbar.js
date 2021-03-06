import React from 'react'
import {useNavigate} from "react-router-dom";

export const LoginRegisterNavbar = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const loginSwitch = (e) => {
        e.preventDefault()
        routeChange('/login')
    }
    const registerSwitch = (e) => {
        e.preventDefault()
        routeChange('/register')
    }


    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" onClick={loginSwitch}
                            type="button" role="tab" aria-controls="home" aria-selected="true">Login
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" onClick={registerSwitch}
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Register
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Login tab
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Register tab</div>
            </div>
        </>
    )
}
