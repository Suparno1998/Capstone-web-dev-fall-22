import React from "react";
import { useParams } from "react-router";
export default function VerifyEmail(props){
    const {token,email} = useParams()

    return <div>
        {token}
        {email}
    </div>
}