import './App.css';
import {LoginPage} from "./MyComponents/LoginPage";
import {Navbar} from "./MyComponents/Navbar";
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LoginRegisterNavbar} from "./MyComponents/LoginRegisterNavbar";
import {RegisterPage} from "./MyComponents/RegisterPage";
import {HomePage} from "./MyComponents/HomePage";
import {TransferRequestsPage} from "./MyComponents/TransferRequestsPage";
import {AddNewDevicePage} from "./MyComponents/AddNewDevicePage";

function App() {
    const [aadhaarNumber, setAadhaarNumber] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = React.useState("Demo") //after login
    const [userAadhaarNumber, setUserAadhaarNumber] = React.useState("Demo") //after login


    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login"
                           element={<><LoginRegisterNavbar/>
                               <LoginPage aadhaarNumber={aadhaarNumber}
                                               setAadhaarNumber={setAadhaarNumber}
                                               password={password}
                                               setPassword={setPassword}/></>}/>
                    <Route exact path="/home" element={<><Navbar/><HomePage userName={userName}/></>}/>
                    <Route exact path="/register"
                           element={<>
                               <LoginRegisterNavbar/>
                               <RegisterPage/></>}/>
                    <Route exact path="/transfer-requests"
                           element={<>
                               <Navbar/>
                               <TransferRequestsPage/></>}/>
                    <Route exact path="/add-new-device"
                           element={<>
                               <Navbar/>
                               <AddNewDevicePage/></>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
