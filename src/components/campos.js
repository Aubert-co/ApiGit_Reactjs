import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function renderDatas({name,login,public_repos,location,avatar_url},ind){
    return (
        <>
        <div  key={ind}>
            <div className="imgs">
                <img width="200px" height="200px" src={avatar_url}/>
            </div>
            <div className="itens">
                <h1>Name:{name}</h1>
                <h3>Username:{login}</h3>
                <h3>repositorio:{public_repos}</h3>
                <h3>Location{location}</h3>
             
            </div>
        </div>
        </>
    )
}
function Campos(){
    const data = useSelector(state=>state.actions.dataUsers)
    useEffect(()=>{
        const {avatar_url,login,name,public_repos,email,location} = data
      
    },[data])

    return data.map(renderDatas)
    
}

export default Campos