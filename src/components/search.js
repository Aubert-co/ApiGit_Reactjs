import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {findUsers,SelectDatas} from '../store/actionsSlice'

function Search(){
    const [inputValue,SetInput] = useState('Search a user') 
    const data = useSelector(state=>state.actions.data)
    const dispatch  = useDispatch()

    const OnSearch = ()=>{
        
      fetch(`https://api.github.com/users/aubert-co`)
        .then((data)=>data.json())
        .then((datas)=>{
            dispatch(findUsers(datas))
        })
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