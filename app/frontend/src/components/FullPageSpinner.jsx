import React from "react"

export default function FullPageSpinner(props){
    let className = "spinner-grow "+`text-${props.variant ? props.variant: "dark"}`
    return <div className="row d-flex justify-content-center align-items-center" style={{minHeight : "80vh"}}>
      <div className={className} role="status" style={{height : "5rem", width: "5rem"}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
}