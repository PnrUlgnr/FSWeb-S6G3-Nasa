import React, {useState,useEffect}  from "react";
import "./App.css";
import data from "./data";
import Image from "./Image";
import Video from "./Video";
import axios from "axios";

function App() {
  const [veri, setVeri] = useState(data);
useEffect(
  
  ()=>{
    const url="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
axios.get(url)
.then(response =>{
  setVeri(response.data)
  
  
}).catch(err=>{
  console.log("error",err);
})
},[]
)

  return (
    <div className="App">
    {
      veri.media_type=="image"
      ?<Image url= {veri.hdurl}/>
      :<Video url={veri.url}/>
}
      
      <h2>{veri.title}</h2>
      <div>
        <p>{
          veri.copyright ? 'copyright: ${veri.copyright}': "" }</p>
        <p>{veri.date}</p>

      </div>
      
      <p>
        {veri.explanation}
        </p>
    </div>
  );
}

export default App;
