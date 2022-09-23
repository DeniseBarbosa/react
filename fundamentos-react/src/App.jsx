import React from "react"


import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParamentro'
import Fragmentos from './componentes/basicos/Fragmentos'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'

export default function App(props){
    return(
        <div id='app'>
            <h1>Fundamentos React</h1>

            <Card titulo="#4 - Desafiou Aleatório">
                 <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="#3 - Fragmento">
                <Fragmentos></Fragmentos>
            </Card>

            <Card titulo="#2 - Com Parâmentro">
                <ComParametro 
                    titulo =" Aqui"
                    subtitulo = 'Subtitulo'/>
            </Card>
           
            <Card titulo="#1 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>
            
           
            
    </div>
    )
}