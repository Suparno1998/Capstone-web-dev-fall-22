import React, {useEffect, useState} from 'react';
import { Alert } from 'react-bootstrap';
import PasswordInput from "../components/PasswordInput.jsx";
import BusyButton from '../components/BusyButton.jsx';
export default function ResetPassword(){
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [variant, setVariant] = useState("warning")
    const [message, setMessage] = useState("")
    const [messageFlag, setMessageFlag] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    console.log(token, email)
    const handleChange = (e) => {
        switch(e.target.id){
            case "password":
                setPassword(e.target.value)
                break
            case "verify-password":
                setVerifyPassword(e.target.value)
                break
        }
    }
    const separateTokens = (UrlString)=>{
        let tempObj = {}
        let replacedURL = UrlString.replace("?","")
        const values = replacedURL.split("&")
        for(let value of values){
            let parts = value.split("=")
            tempObj[parts[0]]=parts[1]
        }
        return tempObj
    }
    const closeAlert = ()=>{
        setMessageFlag(false)
    }
    const showAlert = (message,variant)=>{
        setVariant(variant)
        console.log(message)
        setMessage(message)
        setMessageFlag(true)
    }
    const handleReset = async ()=>{
        try{
            setIsLoading(true)
            if(password === ""){
                showAlert("Password field cannot be empty","warning")
                return
            }
            else if(verifyPassword === ""){
                showAlert("Verify Password field cannot be empty","warning")
                return
            }
            else if(password !== verifyPassword){
                showAlert("Password and Verify Password field should match","warning")
                return
            }
            else{
                console.log({
                    token : token,
                    email : email,
                    password : password
                })
                const response = await fetch('/auth/reset',{
                    method : "POST",
                    headers : { 'Content-Type': 'application/json' },
                    body : JSON.stringify({
                        token : token,
                        email : email,
                        password : password
                    })
                })
        
                const data = await response.json()
                if(data.status){
                    showAlert(data.message,"success")
                }
                else{
                    console.log(data.error)
                    showAlert(data.error,"danger")
                }
            }
        }catch(e){
            console.log(e)
            showAlert(e,"danger")
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        const items = separateTokens(location.search)
        setToken(items.token)
        setEmail(items.email)
        console.log(token,email)
    },[location.search])
    return(
        <div className="container-fluid">
            <div className='row d-flex justify-content-center'>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <div className="row p-0">
                        <h3>Reset Password</h3>
                    </div>
                    <div className='row'>
                        <Alert variant={variant} show={messageFlag} onClose={closeAlert} dismissible>{message}</Alert>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='newpass'>Enter New Password</label>
                        <PasswordInput className="form-control" name="password" id="password" value={password} onChange={handleChange}></PasswordInput>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor='newpass'>Re-enter New Password</label>
                        <PasswordInput className="form-control" name="verify-password" id="verify-password" value={verifyPassword} onChange={handleChange}></PasswordInput>
                    </div>
                    <div className="row mb-3 d-flex justify-content-center">
                       <div className="col-md-4">
                            <BusyButton className="btn btn-outline-success" id="submit-reset-password" type="button" onClick={handleReset} text="Reset Password" busyFlag={isLoading}></BusyButton>
                       </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}