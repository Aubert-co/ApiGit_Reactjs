import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {findUsers,findRepositories} from '../store/actionsSlice'

function Search(){
    const [inputValue,SetInput] = useState('Search a user') 
    const data = useSelector(state=>state.actions.dataUsers)
    const dispatch  = useDispatch()

    const OnSearch = ()=>{
    try{
      fetch(`https://api.github.com/users/aubert-co`)
        .then((data)=>data.json())
        .then((datas)=>dispatch(findUsers(datas)))
        .finally(()=>{
            fetch("https://api.github.com/users/Aubert-co/subscriptions")
            .then((data)=>data.json())
            .then((datas)=>{
                dispatch(findRepositories(datas))
            })
        })
    }catch(err){
        console.log('err')
    }
    }
    const OnchangeInput = ({target})=>{
        SetInput(target.value)
    }
    
    return (
        <>
            <input type="text" onChange={OnchangeInput}/>
            <button onClick={OnSearch}>Search</button>
        </>
    )
}

export default Search