import './App.css';
import {LoginPage} from "./MyComponents/LoginPage";
import {Navbar} from "./MyComponents/Navbar";
import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {LoginRegisterNavbar} from "./MyComponents/LoginRegisterNavbar";
import {RegisterPage} from "./MyComponents/RegisterPage";
import {HomePage} from "./MyComponents/HomePage";
import {TransferRequestsPage} from "./MyComponents/TransferRequestsPage";
import {AddNewDevicePage} from "./MyComponents/AddNewDevicePage";
import {BookPickupPage} from "./MyComponents/BookPickupPage";
import {CheckOwnerPage} from "./MyComponents/CheckOwnerPage";
import {Footer} from "./MyComponents/Footer";
import {Heading} from "./MyComponents/Heading";
import {BuyingRequestsPage} from "./MyComponents/BuyingRequestsPage";

function App() {
    const [aadhaarNumber, setAadhaarNumber] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = React.useState("Demo") //after login
    const [userAadhaarNumber, setUserAadhaarNumber] = React.useState("111111111111") //after login
    const [userLinkedDevices, setUserLinkedDevices] = React.useState([])
    const [selectedDeviceDetails, setSelectedDeviceDetails] = useState({'IMEI': '1234567891234567'})
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login"
                           element={<><Heading/><LoginRegisterNavbar/>
                               <LoginPage aadhaarNumber={aadhaarNumber}
                                          setAadhaarNumber={setAadhaarNumber}
                                          password={password}
                                          setPassword={setPassword}
                                          userAadhaarNumber={userAadhaarNumber}
                                          setUserAadhaarNumber={setUserAadhaarNumber}/><Footer/></>}/>

                    <Route exact path="/home"
                           element={<><Heading/><Navbar/>
                               <HomePage userName={userName}
                                         userAadhaarNumber={userAadhaarNumber}
                                         setUserName={setUserName}
                                         userLinkedDevices={userLinkedDevices}
                                         setUserLinkedDevices={setUserLinkedDevices}
                                         setSelectedDeviceDetails={setSelectedDeviceDetails}/><Footer/></>}/>
                    <Route exact path="/register"
                           element={<><Heading/>
                               <LoginRegisterNavbar/>
                               <RegisterPage/><Footer/></>}/>
                    <Route exact path="/transfer-requests"
                           element={<><Heading/>
                               <Navbar/>
                               <TransferRequestsPage userName={userName}
                                                     userAadhaarNumber={userAadhaarNumber}
                                                     userLinkedDevices={userLinkedDevices}/><Footer/></>}/>
                    <Route exact path="/add-new-device"
                           element={<><Heading/>
                               <Navbar/>
                               <AddNewDevicePage userName={userName}
                                                 userAadhaarNumber={userAadhaarNumber}
                                                 userLinkedDevices={userLinkedDevices}/><Footer/></>}/>
                    <Route exact path="/book-pickup"
                           element={<><Heading/>
                               <Navbar/>
                               <BookPickupPage selectedDeviceDetails={selectedDeviceDetails}/><Footer/></>}/>
                    <Route exact path="/check-owner"
                           element={<><Heading/>
                               <Navbar/>
                               <CheckOwnerPage userName={userName}
                                               userAadhaarNumber={userAadhaarNumber}
                                               userLinkedDevices={userLinkedDevices}/><Footer/></>}/>
                    <Route exact path="/buying-requests"
                           element={<><Heading/>
                               <Navbar/>
                               <BuyingRequestsPage userName={userName}
                                               userAadhaarNumber={userAadhaarNumber}
                                               userLinkedDevices={userLinkedDevices}/><Footer/></>}/>
                    <Route exact path="/" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
