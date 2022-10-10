import React, { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(false)
    const handleChange = (evt)=>{
        if(evt.target.name === "email"){
            setEmail(evt.target.value)
        }
        else if(evt.target.name === "password"){
            setPassword(evt.target.value)
        }
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        console.log(email,password)
    }
    return (
		<Form className="p-1">
            <Alert variant="danger" show={hasError}>
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
            <Button variant="primary" type="submit" onClick={handleLogin}>
                Login
            </Button>
        </Form>
    )
}

