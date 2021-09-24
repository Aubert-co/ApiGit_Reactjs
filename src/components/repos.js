import React from 'react'

const map = (({repo,itens})=>{

    return (
        <div className="respoti">
            <div className="name">{repo}</div>
            <div className="itens">{itens}</div>
        </div>
    )
})
function RenderRepositories(){

    return (
        <h1>Ola</h1>
    )
}

export default RenderRepositories