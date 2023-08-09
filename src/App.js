import React, {useState}  from "react";
import "./App.css";
import data from "./data";
import Image from "./Image";

function App() {
  const [veri,setVeri] = useState(data);
  return (
    <div className="App">
      <ımage url={veri.hdurl}/>
      <h2>{veri.title}</h2>
      <div>
        <p>copyright:{veri.copyright}</p>
        <p>{veri.date}</p>

      </div>
      
      <p>
        {veri.explanation}
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip edin
		İyi eğlenceler! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
