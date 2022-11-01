import React,{useState} from "react";
import { Alert } from "react-bootstrap";
import './bmi.css';
export default function BMIComponent(props)
{
    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)
    const [heightError ,setHeightError]=useState("")
    const [weightError, setWeightError] = useState("")
    const [bmi, setBMI] = useState(null)
    const [variant, setVariant] = useState("success")
    const handleinput = (e)=>{
        switch(e.target.id){
              case "height":
                    setHeight(e.target.value)
                    break;
                case "weight":
                        setWeight(e.target.value)
                             break;
        }
    }
    const clear = ()=>{
        setHeight("")
        setWeight("")
        setBMI("")
    }
    const calculate=()=>{
        if(height === '' || isNaN(height) || (height <= 0)){
           setHeightError('Please provide a valid height');
        }else{
           setHeightError("")
        }
        if(weight === '' || isNaN(weight) || (weight <= 0)){
            setWeightError('Please provide a valid weight');
        }else{
            setWeightError("")
        }

        if(heightError === "" && weightError === ""){
            const bmiVal = (weight / ((height*height)/10000)).toFixed(2);
            if(bmiVal < 18.6){
                setVariant("warning")
                setBMI('Under weight : ' + bmiVal);
            }else if(bmiVal >= 18.6 && bmiVal < 24.9){
                setVariant("success")
                setBMI('Normal : ' + bmiVal);
            }else{
                setVariant("danger")
                setBMI('Over weight : ' + bmiVal);
            }
        }
    }
    return <div>
                <div>Height in CM(s)
                    <input type="text" id="height" value={height} onChange={handleinput} className="form-control"/><br></br>{heightError !== "" ? <span id="height_error" className="span text-danger">{heightError}</span> : <></>}
                </div>
                <div>Weight in KG(s)
                    <input type="text" id="weight" value={weight} onChange={handleinput} className="form-control"/><br></br>{weightError !== "" ? <span id="weight_error" className="span text-danger">{weightError} </span> : <></>}
                </div>
                <button id="btn" onClick={calculate} className="btn btn-outline-success">Calculate</button>
                <button id="btn" onClick={clear} className="btn btn-outline-dark ms-3">Clear</button>
                {!bmi ? "" : <Alert id="output" variant={variant} className="my-2">{bmi}</Alert>}
            </div>
}
