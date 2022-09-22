import ReactDom from 'react-dom'
import React from 'react'

const jsx = <strong> Outra forma de usar o JSX</strong>
ReactDom.render(
    <div>
        {jsx} /** lembrando que jsx é apenas uma variavel nomeada  */
    </div>,
    document.getElementById('root')
)