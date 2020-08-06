import React, {useContext} from 'react';
import {Context} from "../../AppContext";
import "./Input.css"


export default function Input(props) {
    
  const {setState} = useContext(Context);

  const enviarEstado = (e) =>{
    const {name, value } = e.target
    // e.preventDefault()
    // e.stopPropagation()
   
    setState( { [name]:  value}
    )
}


    return (
        <div className="input" >
            <p className="neon label" >{props.label}</p>
            <input className="neonbox"  name={props.name} value={props.value} onChange={enviarEstado} type={props.type} />
        </div>
    )
}
