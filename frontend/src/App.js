import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [team, setTeam] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('/check')
      let data = await response.json()
      console.log(data)
      console.log(data.data)
      if(data.status === "works")
        setTeam(data.data)
      else
        alert("Error")
    }
    fetchData()
  },[])
  return (
    <div className="App">
      {team.map((v,index) => <li>Team Member {index+1} - {v}</li>)}
    </div>
  );
}

export default App;
