import React, {useState} from "react";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
export default function PasswordInput(props){
    const [showFlag, setShowFlag] = useState(false)

    const ToggleShow = ()=>{
        setShowFlag(!showFlag)
    }
    return <div class="input-group">
        <input style={{marginRight : "0px"}} type={showFlag ? "text" : "password"} className={props.className} name={props.name} id={props.id} value={props.value} onChange = {props.onChange} required={props.required}></input>
        <span className="input-group-text show-button" onClick={ToggleShow}>{showFlag ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
    </div>
}