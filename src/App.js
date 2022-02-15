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
import {BookPickupPage} from "./MyComponents/BookPickupPage";
import {ReportTheftPage} from "./MyComponents/ReportTheftPage";

function App() {
    const [aadhaarNumber, setAadhaarNumber] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = React.useState("Demo") //after login
    const [userAadhaarNumber, setUserAadhaarNumber] = React.useState("111111111111") //after login
    const [userLinkedDevices, setUserLinkedDevices] = React.useState([])
    const [selectedDeviceDetails, setSelectedDeviceDetails] = useState({})

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login"
                           element={<><LoginRegisterNavbar/>
                               <LoginPage aadhaarNumber={aadhaarNumber}
                                          setAadhaarNumber={setAadhaarNumber}
                                          password={password}
                                          setPassword={setPassword}
                                          userAadhaarNumber={userAadhaarNumber}
                                          setUserAadhaarNumber={setUserAadhaarNumber}/></>}/>
                    <Route exact path="/home"
                           element={<><Navbar/>
                               <HomePage userName={userName}
                                         userAadhaarNumber={userAadhaarNumber}
                                         setUserName={setUserName}
                                         userLinkedDevices={userLinkedDevices}
                                         setUserLinkedDevices={setUserLinkedDevices}
                                         setSelectedDeviceDetails={setSelectedDeviceDetails}/></>}/>
                    <Route exact path="/register"
                           element={<>
                               <LoginRegisterNavbar/>
                               <RegisterPage/></>}/>
                    <Route exact path="/transfer-requests"
                           element={<>
                               <Navbar/>
                               <TransferRequestsPage userName={userName}
                                                     userAadhaarNumber={userAadhaarNumber}
                                                     userLinkedDevices={userLinkedDevices}/></>}/>
                    <Route exact path="/add-new-device"
                           element={<>
                               <Navbar/>
                               <AddNewDevicePage userName={userName}
                                                 userAadhaarNumber={userAadhaarNumber}
                                                 userLinkedDevices={userLinkedDevices}/></>}/>
                    <Route exact path="/book-pickup"
                           element={<>
                               <Navbar/>
                               <BookPickupPage selectedDeviceDetails={selectedDeviceDetails}/></>}/>
                    <Route exact path="/report-theft"
                           element={<>
                               <Navbar/>
                               <ReportTheftPage/></>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
