import './App.css';
import {LoginPage} from "./MyComponents/LoginPage";
import {Navbar} from "./MyComponents/Navbar";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    const [aadhaarNumber, setAadhaarNumber] = useState("")
    const [password, setPassword] = useState("")


    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/"
                           element={<LoginPage aadhaarNumber={aadhaarNumber}
                                               setAadhaarNumber={setAadhaarNumber}
                                               password={password}
                                               setPassword={setPassword}/>}>
                    </Route>
                    <Route exact path="/about" element={<Navbar/>}>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
