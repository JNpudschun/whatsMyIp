
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps'

function App() {
  const [ip, setIp] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const[displayInfo,setDisplayInfo] = useState({name: "", timezone:"",flag:"",capital:""});
  const [center, setCenter] = useState([])
  const [zoom, setZoom] = useState(11)
  const [hue, setHue] = useState(0)
  const [loading, setLoading] = useState(false);
  const color = `hsl(${hue % 360}deg 39% 70%)`
  const API_KEY = process.env.REACT_APP_API_KEY;

  
  async function getData(){
    try{  
      let url = "https://geo.ipify.org/api/v2/country?apiKey="+API_KEY;
      console.log(url)
      const response = await axios.get(url);
      console.log(response.data)
      setIp(response.data.ip);
      setCountryCode(response.data.location.country) 
      console.log(ip)
      console.log(countryCode)
      // url = "https://restcountries.com/v2/alpha/"+countryCode;
      const response2 = await axios.get("https://restcountries.com/v2/alpha/"+response.data.location.country)
      
      console.log(response2.data)
      
      console.log(center)
      return response2.data;
    }catch(e){
        console.log(e)
    }
  }
 
  useEffect(()=>{
      async function setup() {
        setLoading(true)
        let info = await getData();
        console.log(info)
        setCenter(info.latlng)
        setDisplayInfo({name: info.name, timezone: info.timezones , flag: info.flag , capital: info.capital})
        setLoading(false)
      }
    setup();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>What is my IP?</h1>
      </header>

      <div>
            <h2>Your IP-Adresse is:</h2>
            {loading ? (<p>Loading...</p>):(
            <div>
              <h3>{ip}</h3>
              <div className = "country">
                <Map 
                  height={300}
                  
                  center={center} 
                  zoom={zoom} 
                  onBoundsChanged={({ center, zoom }) => { 
                    setCenter(center) 
                    setZoom(zoom) 
                  }} 
                >
                  <Marker 
                    width={50}
                    anchor={[center[0],center[1]]} 
                    color={color} 
                    onClick={() => setHue(hue + 20)} 
                  />
                </Map>
                <div className="country-container">
                  <div className ="flag">
                    <img src={displayInfo.flag} alt="flag"width="50%" />
                  </div>
                  <div className="info">
                    <p>Country:{displayInfo.name}</p>
                    <p>Capital:{displayInfo.capital}</p>
                    <p>Timezone:{displayInfo.timezone}</p>
                  </div>
                </div>
              </div>
              
              
            </div> )}
             
        </div>
    </div>
  );
}

export default App;
