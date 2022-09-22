import './index.css'
import ReactDom from 'react-dom' /**Aqui a variavel pode ser nomeada como quiser */
import React from 'react' /**importação obrigatoria a variavel não é nomeada  */

const jsx = <strong> Outra forma de usar o JSX</strong>
ReactDom.render(
/** lembrando que jsx é apenas uma variavel nomeada  */
    <div>
        {jsx} 
    </div>,
    document.getElementById('root')
)