import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'


function MostUsedLanguages(){
    const data = useSelector(state=>state.actions.dataRepos)

    console.log('mouset')

    useEffect(()=>{
        
    },[data])
    return (
        <h1>Ola</h1>
    )
}


export default MostUsedLanguages