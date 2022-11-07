import React, {useState} from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useSignUp } from "../utils/useSignup"
import PasswordInput from "./PasswordInput.jsx";

export default function Register(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [message, setMessage] = useState("")
    const [variant, setVariant] = useState("danger")
    const [hasError, setHasError] = useState(false)
    const {signup, isLoading} = useSignUp()

    const openLogin = (e) =>{
        e.preventDefault()
        props.openFunction()
    }

    const handleChange = (evt)=>{
        switch(evt.target.id){
            case "register-email":
                setEmail(evt.target.value)
                break;
            case "register-password":
                setPassword(evt.target.value)
                break;
            case "register-re-password":
                setVerifyPassword(evt.target.value)
                break;
        }
    }
    const handleRegister = async (evt)=>{
        evt.preventDefault()
        if(email === ""){
            setMessage("Email is required")
            setHasError(true)
            return
        }
        if(password === ""){
            setMessage("Password is required")
            setHasError(true)
            return
        }
        if(verifyPassword === ""){
            setMessage("Verify Password is required")
            setHasError(true)
            return
        }
        if(verifyPassword !== password){
            setMessage("Password and verify password do not match")
            setHasError(true)
            return
        }
        setMessage("")
        setHasError(false)
        let response = await signup(email, password)
        console.log(response)
        if(response.status){
            setVariant("success")
            setHasError(true)
            setMessage("Registration is successful, please verify your email address before signing up.")
        }
    }
    return (
		<div className="form">
            <div className="row">
                <Alert variant={variant} show={hasError} dismissible>
                    <p>{message}</p>
                </Alert>
            </div>
            <div class="row form-group d-flex justify-content-center mb-3">
                <div className="col-lg-8 col-md-11 col-sm-11">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="register-email" id="register-email" value={email} onChange = {handleChange} required></input>
                </div>
            </div>
            <div class="row form-group d-flex justify-content-center mb-3">
                <div className="col-lg-8 col-md-11 col-sm-11">
                    <label htmlFor="password" className="form-label">Password</label>
                    <PasswordInput className="form-control" name="register-password" id="register-password" value={password} onChange={handleChange}></PasswordInput> 
                </div>
            </div>
            <div class="row form-group d-flex justify-content-center mb-3">
                <div className="col-lg-8 col-md-11 col-sm-11">
                    <label htmlFor="password" className="form-label">Re-enter Password</label>
                    <PasswordInput className="form-control" name="register-re-password" id="register-re-password" value={verifyPassword} onChange={handleChange}></PasswordInput>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-md-4 text-center">
                    <Button variant="primary" type="submit" onClick={handleRegister} disabled={isLoading}>Sign Up {isLoading ? <i className="fas fa-spinner fa-spin"></i> : ""}</Button>
                </div>
           </div>
           <div className="row d-flex justify-content-center mb-3">
                <div className="col-md-6 text-center">
                    <a href="#" className="small" onClick={openLogin}>Already have an account? Sign In!</a>
                </div>
           </div>
        </div>
    )
}
