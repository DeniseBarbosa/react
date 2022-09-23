import React from "react"


import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParamentro'
import Fragmentos from './componentes/basicos/Fragmentos'
import Aleatorio from './componentes/basicos/Aleatorio'

export default function App(props){
    return(
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Fragmentos></Fragmentos>
            <ComParametro 
                 titulo =" Aqui"
                 subtitulo = 'Subtitulo'/>
            <Primeiro></Primeiro>
            <Aleatorio min={1} max={60}></Aleatorio>
    </div>
    )
}