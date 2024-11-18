import { useState } from "react";
import "./style.css";

export default function MagicCounter(){
    const [magicNumber, setMagicNumber] = useState(0);

    return(
        <div>
            <h1 className={magicNumber % 5 ? "not-magic" : "magic"}>Le nombre {magicNumber}</h1><p>{magicNumber % 5 ? " " : "✨ Nombre magique atteint ! ✨"}</p>
            <button onClick={()=> setMagicNumber(magicNumber-1)}>-</button>
            <button onClick={()=> setMagicNumber(magicNumber+1)}>+</button>
            {magicNumber>0 ? <button className="resset" onClick={()=> setMagicNumber(0)}>Resset</button> : ""}
        </div>
    )
}