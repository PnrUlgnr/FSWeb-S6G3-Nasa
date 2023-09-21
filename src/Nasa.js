import React from "react";
import Arama from "./arama.js";
import Image from "./Image";
import Video from "./Video";
const Nasa=(props)=>{
    const{arama,aramaHandler,veri}=props;
    return(
        <div>
<Arama arama={arama} aramaHandler={aramaHandler}/>
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
    )</div>
};
export default Nasa;