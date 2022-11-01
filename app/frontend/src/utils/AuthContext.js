import React, {createContext, useContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, {
        user : null
    })
    console.log("Authcontext state: ", state)

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        if(user){
            dispatch({type: 'LOGIN', payload: user})
        }
    },[])
    
    return<AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
}

export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {user : action.payload}
        case 'LOGOUT':
            return {user : null}
        default:
            return state
    }
}
export const useAuthContext = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw Error("use inside AuthContext")
    }
    return context
}