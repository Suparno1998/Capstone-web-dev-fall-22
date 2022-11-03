import React, {useState, useEffect} from 'react';

export default function BusyButton(props){
    const[isLoading, setIsLoading] = useState(props.busyFlag)
    useEffect(()=>{
        setIsLoading(props.busyFlag)
    },[props.busyFlag])
    return <button 
        className={props.className} 
        name={props.name ? props.name : "busy-button"} 
        id = {props.id ? props.id : "busy-button"} 
        disabled = {isLoading} 
        onClick={props.onClick} >{props.text} {isLoading ? <i className="fas fa-spinner fa-spin"></i> : ""}</button>
}