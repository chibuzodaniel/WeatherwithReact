import React,{useState} from 'react';
import axios from 'axios';


function App() {
  const [data, setData] =useState({})
  const [location, setLocation] =useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=952e2b0dbe712c5b57a6aaabeea68dbf`
  
  const searchLocation=(event)=>{
    if (event.key ==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
  
  }
  return (
    <div className="app"> 
    <div className="container">
      <div className="top">
        <div className="location">
          <p>Enugu</p>
        </div>
        <div className="temp">
          <h1>60°F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className='bold'>60°F</p>
          <p>Feels like</p>
        </div>
        <div className="humidity">
          <p className='bold'>50%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
         <p className='bold'>12 MPH</p>
         <p>Wind Speed</p>
        </div>
      </div>
      
      </div> 
    </div>
  );
}

export default App;
