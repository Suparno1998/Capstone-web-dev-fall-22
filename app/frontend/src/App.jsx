import React from 'react';
import {createRoot} from 'react-dom/client';
import Navbar from './components/Navbar';
import Test from './components/Test';

export default class App extends React.Component{
    constructor(){
        super()
        this.state = {
            team : []
        }
    }
    async componentDidMount(){
        const data = await fetch('/check')
        let response = await data.json()
        if(response.status === "works")
        {
            this.setState({team : response.data})
        }
    }
    /* render(){
        return <div>
                    <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1>
                </div>
    } */
    render(){
        return (
            <React.Fragment>
                <Test/>
            </React.Fragment>
        );
    }
}


const element = document.getElementById('app')
const root = createRoot(element);
root.render(<App/>)
