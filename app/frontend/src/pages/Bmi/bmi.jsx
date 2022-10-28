import React,{useState} from "react";
import './bmi.css';
export default function BMIComponent(props)
{
    const [height,setHeight] = useState(0)
    const [weight,setWeight] = useState(0)
    const [heightError ,setHeightError]=useState("")
    const [weightError, setWeightError] = useState("")
    const [bmi, setBMI] = useState(0)
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
                setBMI('Under weight : ' + bmiVal);
            }else if(bmiVal >= 18.6 && bmiVal < 24.9){
                setBMI('Normal : ' + bmiVal);
            }else{
                setBMI('Over weight : ' + bmiVal);
            }
        }
    }
    return <div class="wrapper-bmi">
        <div class="card">
    <p>Height in CM:
        <input type="text" id="height" value={height} onChange={handleinput} className="input"/><br></br>{heightError !== "" ? <span id="height_error" className="span">{heightError}</span> : <></>}
    </p>
    <p>Weight in KG:
        <input type="text" id="weight" value={weight} onChange={handleinput} className="input"/><br></br>{weightError !== "" ? <span id="weight_error" className="span">{weightError} </span> : <></>}
    </p>
    <button id="btn" onClick={calculate} className="button">Calculate</button>
    <p id="output" className="output">{bmi}</p>
    </div>
    </div>
}
