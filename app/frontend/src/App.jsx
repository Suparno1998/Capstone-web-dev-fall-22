import React from 'react';
import {createRoot} from 'react-dom/client';
<<<<<<< HEAD
import Navbar from './components/Navbar.jsx';
import HeroHomePage from './components/HeroHomePage.jsx';
import Footer from './components/Footer.jsx';
import Test from './components/Test.jsx';

=======
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Navbar from './components/Navbar.jsx';
import Modal from 'react-bootstrap/Modal';
import Login from './components/Login.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register.jsx';
>>>>>>> 61be4e030e921ca4d0b6ad8d0acf673c6a5c9fa7
export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            team : [],
            isLoginModalOpen : false
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }
    async componentDidMount(){
        const data = await fetch('/check')
        let response = await data.json()
        if(response.status === "works")
        {
            this.setState({team : response.data})
        }
    }
<<<<<<< HEAD
    /* render(){
=======
    handleOpen(){
        console.log('hi')
        this.setState({
            isLoginModalOpen : true
        })
    }
    handleLogin(){

    }
    handleRegister(){

    }
    handleClose(){
        this.setState({
            isLoginModalOpen : false
        })
    }
    render(){
>>>>>>> 61be4e030e921ca4d0b6ad8d0acf673c6a5c9fa7
        return <div>
                    <Navbar handleOpen = {this.handleOpen} handleClose = {this.handleClose}></Navbar>
                    <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1>
                    <Modal show={this.state.isLoginModalOpen} onHide={this.handleClose} >
                        <Modal.Body className="p-0">
                            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example" className="mb-3" fill>
                                <Tab eventKey="login" title="Login">
                                    <Login></Login>
                                </Tab>
                                <Tab eventKey="register" title="Register">
                                    <Register></Register>
                                </Tab>
                            </Tabs>
                        </Modal.Body>
                    </Modal>
                </div>
<<<<<<< HEAD
    } */
    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <HeroHomePage/>
                <Footer/>
            </React.Fragment>
        );
=======
>>>>>>> 61be4e030e921ca4d0b6ad8d0acf673c6a5c9fa7
    }
}


const element = document.getElementById('app')
const root = createRoot(element);
root.render(<App/>)


