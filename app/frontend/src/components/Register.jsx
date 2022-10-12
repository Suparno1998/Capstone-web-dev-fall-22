import React, {useState} from "react"
import { Form, Button, Alert } from "react-bootstrap"
export default function Register(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [error, setError] = useState("")
    const [hasError, setHasError] = useState(false)
    const handleChange = (evt)=>{
        switch(evt.target.id){
            case "email":
                setEmail(evt.target.value)
                break;
            case "password":
                setPassword(evt.target.value)
                break;
            case "verifypassword":
                setVerifyPassword(evt.target.value)
                break;
        }
    }
    const handleRegister = async (evt)=>{
        evt.preventDefault()
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
        if(verifyPassword === ""){
            setError("Verify Password is required")
            setHasError(true)
            return
        }
        if(verifyPassword !== password){
            setError("Password and verify password do not match")
            setHasError(true)
            return
        }
        setError("")
        setHasError(false)
        const registerObject = {
            email : email,
            password : password
        }
        let response = await fetch("/auth/signup",{
            method : "post",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(registerObject)
        })

        let data = await response.json()
        console.log(response)
    }
    return (
		<Form className="p-1">
            <Alert variant="danger" show={hasError}>
                <p>{error}</p>
            </Alert>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email" value={email} onChange={handleChange}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="verifypassword">
                <Form.Label>Verify - Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="verifypassword" value={verifyPassword} onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleRegister}>
                Submit
            </Button>
        </Form>
    )
}

