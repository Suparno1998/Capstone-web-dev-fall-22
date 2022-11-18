import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useLogIn } from "../utils/useLogin";
import PasswordInput from "./PasswordInput.jsx";
import {useNavigate, useLocation} from 'react-router-dom'
export default function Login(props){
    const [email, setEmail] = useState("skarmakar7302@conestogac.on.ca")
    const [password, setPassword] = useState("testab101")
    const [variant, setVariant] = useState("danger")
    const [hasError, setHasError] = useState(false)
    const {login, error, isLoading} = useLogIn()

    const openRegister = (e) =>{
        e.preventDefault()
        props.openFunction()
    }
    const handleChange = (evt)=>{
        if(evt.target.name === "login-email"){
            setEmail(evt.target.value)
        }
        else if(evt.target.name === "login-password"){
            setPassword(evt.target.value)
        }
    }
    const handleLogin = async (e)=>{
        e.preventDefault()
        if(email === ""){
            setError("Email is required")
            setHasError(true)
            return
        }
        if(password === ""){
            setError("Password is required")
            setHasError(true)
            return
        }
        setHasError(false)
        const loginObject = {
            email : email,
            password : password
        }
        let response = await login(email, password)
        if(!response.status){
            setHasError(true)
            setVariant("danger")
        }else{
            window.location.href="/home"
        }
        
    }
    return (
		<div className="form">
            <div className="row">
                <Alert variant={variant} show={hasError} dismissible>
                    <p>{error}</p>
                </Alert>
            </div>
            <div className="row form-group d-flex justify-content-center mb-3">
                <div className="col-lg-8 col-md-11 col-sm-11">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="login-email" id="login-email" value={email} onChange = {handleChange} required></input>
                </div>
            </div>
            <div className="row form-group d-flex justify-content-center mb-3">
                <div className="col-lg-8 col-md-11 col-sm-11">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group mb-3">
                        <PasswordInput className="form-control" name="login-password" id="login-password" value={password} onChange={handleChange}></PasswordInput>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-md-4 text-center">
                    <Button variant="primary" type="submit" onClick={handleLogin} disabled={isLoading}>Sign In {isLoading ? <i className="fas fa-spinner fa-spin"></i> : ""}</Button>
                </div>
           </div>
           <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center">
                <a href="/forget" className="small">Forgot your password ?</a>
                </div>
           </div>
           <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center">
                <a href="/resend" className="small">Didn't receive verification email ?</a>
                </div>
           </div>
           <div className="row d-flex justify-content-center mb-3">
                <div className="col-md-6 text-center">
                    <a href="#" className="small" onClick={openRegister}>Don't have an account? Sign Up!</a>
                </div>
           </div>
        </div>
    )
}
