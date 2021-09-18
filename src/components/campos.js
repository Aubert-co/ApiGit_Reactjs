import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function renderDatas({name,login,public_repos,location,avatar_url},ind){
    return (
        <>
        <div className="cotent" key={ind}>
            <div className="imgs">
                <img src={avatar_url}/>
            </div>
            <div className="campos">
                <h3>{name}</h3>
                <h3>{login}</h3>
                <h3>{public_repos}</h3>
                <h3>{location}</h3>
            </div>
        </div>
        </>
    )
}
function Campos(){
    const data = useSelector(state=>state.actions.data)
    useEffect(()=>{
        const {avatar_url,login,name,public_repos,email,location} = data
       console.log(data)
    },[data])

    return data.map(renderDatas)
    
}

export default Campos