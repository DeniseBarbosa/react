import './App.css'
import React from "react"


import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParamentro'
import Fragmentos from './componentes/basicos/Fragmentos'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'

export default function App(props){
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card titulo="#4 - Desafiou Aleatório" color="#080">
                    <Aleatorio min={1} max={60}></Aleatorio>
                </Card>

                <Card titulo="#3 - Fragmento" color="#ff0066">
                    <Fragmentos></Fragmentos>
                </Card>

                <Card titulo="#2 - Com Parâmentro" color="#ff6600">
                    <ComParametro 
                        titulo =" Aqui"
                        subtitulo = 'Subtitulo'/>
                </Card>
            
                <Card titulo="#1 - Primeiro Componente" color="#ffff00">
                    <Primeiro></Primeiro>
                </Card> 
            </div>
            
    </div>
    )
}