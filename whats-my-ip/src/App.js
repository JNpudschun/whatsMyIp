
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [ip, setIp] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const[countryInfo, setCountryInfo] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  function getData(){
      let url = "https://geo.ipify.org/api/v2/country?apiKey="+API_KEY;
      // console.log(url)
      axios.get(url).then(res=>{
        console.log(res.data)
        setIp(res.data.ip);
        setCountryCode(res.data.location.country);
        console.log(ip)
      console.log(countryCode)
      }).catch(error => console.log(error))
  }
  function getCountryData(){
    let url = "https://restcountries.com/v2/alpha/"+countryCode;
    console.log(url)
    axios.get(url).then(res=>
      {console.log(res.data);
      setCountryInfo(res.data)}).catch(error=>console.log(error))
  }
  useEffect(()=>{
    getData();
    console.log(ip)
    console.log(countryCode)
    getCountryData();
    console.log(countryInfo)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>What is my IP?</h1>
      </header>

      <div>
            <h2>Your IP-Adresse is:</h2>
            <h3>{ip}</h3>
            {/* <MyMap/> */}
        </div>
    </div>
  );
}

export default App;
