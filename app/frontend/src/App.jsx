import React from 'react';
import {createRoot} from 'react-dom/client'

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
    render(){
        return <div>
                    <h2>Hello, world!</h2>
                    <h1>Hello, {this.state.team.join(", ")}</h1>
                </div>
    }
}


const element = document.getElementById('app')
const root = createRoot(element);
root.render(<App/>)
