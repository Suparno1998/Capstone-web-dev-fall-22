import React, { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useNavigate } from "react-router";
import { useLogIn } from "../utils/useLogin";
export default function Login(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState("skarmakar7302@conestogac.on.ca")
    const [password, setPassword] = useState("testab101")
    const [variant, setVariant] = useState("danger")
    const [hasError, setHasError] = useState(false)
    const {login, error, isLoading} = useLogIn()
    const handleChange = (evt)=>{
        if(evt.target.name === "email"){
            setEmail(evt.target.value)
        }
        else if(evt.target.name === "password"){
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
            navigate('/home')
        }
        
    }
    return (
		<Form className="p-1">
            <Alert variant={variant} show={hasError} dismissible>
                <p>{error}</p>
            </Alert>
            <Form.Group className="mb-3" controlId="formLoginEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleChange} name="email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback type="invalid">
                    Please enter a valid email
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handleChange} name="password" required/>
                <Form.Control.Feedback type="invalid">
                    Please enter a valid password
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleLogin} disabled={isLoading}>
                Login
            </Button>
        </Form>
    )
}

