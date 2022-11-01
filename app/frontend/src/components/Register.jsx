import React, {useState} from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useSignUp } from "../utils/useSignup"

export default function Register(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [message, setMessage] = useState("")
    const [variant, setVariant] = useState("danger")
    const [hasError, setHasError] = useState(false)
    const {signup, isLoading} = useSignUp()
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
		<Form className="p-1">
            <Alert variant={variant} show={hasError} dismissible>
                <p>{message}</p>
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
            <Button variant="primary" type="button" onClick={handleRegister} disabled={isLoading}>
                Submit
            </Button>
        </Form>
    )
}

