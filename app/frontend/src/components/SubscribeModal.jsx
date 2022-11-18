import React, {useState} from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';

export default function SubscribeModal(props){
    const [mode,setMode] = useState(props.mode ? props.mode : "create")
    const [startDate, setStartDate] = useState(props.startDate ? props.startDate : "")
    const [duration, setDuration] = useState(props.duration ? props.duration : "")
    const [price, setPrice] = useState(props.price ? props.price : "")
    const [mealPlan, setMealPlan] = useState(props.mealPlan)
    
    return <Modal show={props.show} onHide={props.handleClose} onShow = {props.handleOpen}>
        <Modal.Header>Subscription Dialog &times;</Modal.Header>
        <Modal.Footer>
            {mode === "create" ? <button className='btn btn-outline-success'>Subscribe</button> : <button className='btn btn-outline-info'></button>}
            <button type="button" className='btn btn-outline-secondary'>Cancel</button>
        </Modal.Footer>
    </Modal>
}