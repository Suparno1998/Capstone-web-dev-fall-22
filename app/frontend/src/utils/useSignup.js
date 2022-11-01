import {useState} from 'react';
import { useAuthContext } from './AuthContext';

export const useSignUp = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async (email,password)=>{
        setIsLoading(true)
        setError(null)
        const registerObject = {
            email : email,
            password : password
        }
        let response = await fetch("/auth/signup",{
            method : "post",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(registerObject)
        })
        const data = await response.json()
        if(data.status){
            setIsLoading(false)
        }
        else{
            setIsLoading(false)
            setError(data.error)
        }
        return data
    }

    return {signup, isLoading, error}
}