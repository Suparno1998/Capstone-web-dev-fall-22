import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import { useAuthContext } from '../utils/AuthContext';
import {useCart} from "react-use-cart";
export default function SubscribeModal(props){
    const {addItem} = useCart();
    const [mode,setMode] = useState(props.mode ? props.mode : "create")
    const [startDate, setStartDate] = useState(props.startDate ? props.startDate : "")
    const [duration, setDuration] = useState(props.duration ? props.duration : "")
    const [price, setPrice] = useState("")
    const {user} = useAuthContext()
    console.log(props.mealPlan)
    const handleChange = (e)=>{
        switch(e.target.id){
            case "start_date":
                setStartDate(e.target.value)
                break
            case "duration":
                setDuration(e.target.value)
                switch(e.target.value){
                    case "1m":
                        setPrice(props.mealPlan.price)
                        break
                    case "3m":
                        setPrice((parseFloat(props.mealPlan.price)*3).toFixed(2))
                        break
                    case "6m":
                        setPrice((parseFloat(props.mealPlan.price)*6).toFixed(2))
                }
        }
    }
    const handleCart = (item) =>{
        let items = {
          id: item._id,
          title: item.title,
          description: item.description,
          short_description: item.short_description,
          price: price,
          mealplanImage: item.mealplanImage,
          duration : duration,
          startDate : startDate,
          user : user
        }
        addItem(items);
    };
    const handleSubscribe = async ()=>{
        if(startDate === ''){
            alert("Start Date Cannot be Empty")
        }
        else if(duration === ""){
            alert("Duration cannot be empty")
            setDuration("1m")
        }
        else{
            handleCart(props.mealPlan)
            props.handleClose()
            // console.log(props.mealPlan)
            // let subscribeObj ={
            //     start_date : startDate,
            //     duration : duration,
            //     meal_plan_id : props.mealPlan._id,
            //     price : price,
            //     user_id : user.user_id
            // }
            // const response = await fetch('/api/subscribe',{
            //     method : "POST",
            //     headers: { 'Content-Type': 'application/json' },
            //     body : JSON.stringify(subscribeObj)
            // })
            // const body = await response.json()
            // if(body.status){
            //     alert("Successfully subscribed")
            //     props.handleClose()
            // }
            // else{
            //     console.log(body.error)
            // }
        }
    }
    return <Modal show={props.show} onHide={props.handleClose} onShow = {props.handleOpen}>
        <Modal.Header>Subscription</Modal.Header>
        <Modal.Body>
        <label htmlFor="start_date">Start Date</label>
        <input className="form-control" id="start_date" type="date" value={startDate} onChange={handleChange}></input>
        <label htmlFor="duration">Duration</label>
        <select className='form-control' id="duration" onChange={handleChange} value={duration}>
            <option>Select Duration</option>
            <option value="1m">1 month</option>
            <option value="3m">3 months</option>
            <option value="6m">6 months</option>
        </select>
        <label htmlFor="price">Price</label>
        <input className="form-control" id="price" value={price} disabled />
        </Modal.Body>
        <Modal.Footer>
            {mode === "create" ? <button className='btn btn-outline-success' onClick={handleSubscribe}>Subscribe</button> : <button className='btn btn-outline-info'>Start</button>}
            <button type="button" className='btn btn-outline-secondary' onClick={props.handleClose}>Cancel</button>
        </Modal.Footer>
    </Modal>
}