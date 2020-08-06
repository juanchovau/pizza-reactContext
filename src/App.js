import React, { useContext } from 'react'
import Input from './components/Input/Input'
import Number from './components/Number/Number'
import Title from './components/Title/Title'
import { Context } from './AppContext'

import foto from './images/pexels-photo-1301945.jpeg'
import blur from './images/blur.png'

import './App.css'

function App() {
    const { state } = useContext(Context)
    return (
        <div className="App">
            <img src={foto} alt="Imagen de neon" />
            <img src={blur} alt="blur" />

            <div>
            
                <Title  />
                <div className="form-Container">
                    <div className="input-Container">
                        <Input
                            name="NumOfPizas"
                            value={state.NumOfPizas}
                            label="# Pizzas"
                            type="number"
                        />
                        <Input
                            name="NumOfGue"
                            value={state.NumOfGue}
                            label="# Invitados"
                            type="number"
                        />
                    </div>

                    <Number
                        number={Math.trunc(
                            (state.NumOfGue * state.NumOfGue) / 8
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
