import './index.css'
import ReactDom from 'react-dom' /**Aqui a variavel pode ser nomeada como quiser */
import React from 'react' /**importação obrigatoria a variavel não é nomeada  */

import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParamentro'
/**Observe que a palavra 'Primeiro' pode ser nomeada */
ReactDom.render(

    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro 
        titulo =" Aqui"
        subtitulo = 'Subtitulo'/>
    </div>,
    document.getElementById('root')
)