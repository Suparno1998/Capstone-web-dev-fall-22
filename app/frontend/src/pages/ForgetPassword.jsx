import React, {useState} from 'react';
import BusyButton from '../components/BusyButton.jsx';
import { Alert } from 'react-bootstrap';

export default function ForgotPassword(){
    const [email, setEmail] = useState("")
    const [variant, setVariant] = useState("warning")
    const [message, setMessage] = useState("")
    const [messageFlag, setMessageFlag] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const closeAlert = ()=>{
        setMessageFlag(false)
    }
    const showAlert = (message,variant)=>{
        setVariant(variant)
        setMessage(message)
        setMessageFlag(true)
    }

    const handleForget = async ()=>{
        try{
            setisLoading(true)
            if(email === ""){
                showAlert("Email field cannot be empty","warning")
                return
            }
            const response = await fetch('/auth/forget',{
                method : "POST",
                headers : { 'Content-Type': 'application/json' },
                body : JSON.stringify({email : email})
            })
    
            const data = await response.json()
            if(data.status){
                showAlert(data.message,"success")
            }
            else{
                console.log(data.error)
                showAlert(data.error,"danger")
            }
        }catch(err){
            showAlert(err,"danger")
        }finally{
            setisLoading(false)
        }
    }

    return(
        <div className="container-fluid">
            <div className='row d-flex justify-content-center'>
                <div className="col-lg-4 col-md-6 col-sm-12 p-0">
                    <div className="row p-0">
                        <h3>Forgot Password</h3>
                    </div>
                    <div className='row'>
                        <Alert variant={variant} show={messageFlag} onClose={closeAlert} dismissible>{message}</Alert>
                    </div>
                    <div className="row">
                        <label htmlFor='email' className='p-0'>Enter Your Email</label>
                        <input type="email" name="email" id="email" className="form-control mb-3" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="row mb-3">
                        <div className='col-md-6 p-0'>
                            <BusyButton className="btn btn-outline-success" id="submit-forget-password" type="button" onClick={handleForget} text="Get Reset Password Link" busyFlag={isLoading}></BusyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}