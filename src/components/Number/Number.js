import React from 'react';
import "./Number.css"

export default function Number(props) {
    
    const {number} = props
    return (
        
        <div className="neon number">
            <p>
                {number >= 0 ? `Tienes que comprar ${ number === 0 ? 0 : number} Pizza(s)`: "Ingresar otros valores"}
            </p>
        </div>
    )
}
