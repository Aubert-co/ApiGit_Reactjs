import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  {findUsers,findRepositories,findMostUsedLanguages} from '../store/actionsSlice'
import {FindUsersService,FindSubscritionsService} from '../services/index'


function Search(){
    const [inputValue,SetInput] = useState('Search a user') 

    const dispatch  = useDispatch()

    const OnSearch = async()=>{
        const  data_user =await FindUsersService('aubert-co')
        const {subscriptions_url} = data_user
    
        dispatch(findUsers(data_user))

        //const  subs_users = await FindSubscritionsService(subscriptions_url)
            
        //dispatch(findMostUsedLanguages(subs_users))

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