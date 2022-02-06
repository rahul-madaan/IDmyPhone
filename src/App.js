import './App.css';
import {LoginPage} from "./MyComponents/LoginPage";
import {Navbar} from "./MyComponents/Navbar";
import {useState} from "react";

function App() {
    const [aadhaarNumber, setAadhaarNumber] = useState("")
    const [password, setPassword] = useState("")


  return (
    <>
      <Navbar/>
      <LoginPage aadhaarNumber={aadhaarNumber} setAadhaarNumber={setAadhaarNumber} password={password} setPassword={setPassword}/>
    </>
  );
}

export default App;
