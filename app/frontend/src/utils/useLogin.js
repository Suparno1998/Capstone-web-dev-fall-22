import {useState} from 'react';
import { useAuthContext } from './AuthContext';

export const useLogIn = () => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuthContext()
    const login = async (email,password)=>{
        try{
            setIsLoading(true)
            setError(null)
            const loginObject = {
                email : email,
                password : password
            }
            let response = await fetch("/auth/login",{
                method : "post",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(loginObject)
            })

            const data = await response.json()
            console.log(data.error)
            if(!data.status){
                setIsLoading(false)
                setError(data.error)
            }
            else{
                localStorage.setItem("user",JSON.stringify(data.data))
                dispatch({type: 'LOGIN', payload : data.data})
                setIsLoading(false)
            }
            return data
        }catch(err){
            setIsLoading(false)
            console.log(err)
            setError(err)
        }
    }

    return {login, isLoading, error}
}