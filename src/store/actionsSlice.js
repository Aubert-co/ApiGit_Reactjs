import { createSlice } from "@reduxjs/toolkit";


export const actionSlice = createSlice({
    name:'actions',
    initialState:{
        dataUsers:[],
        dataRepos:[],
        dataMostUsedLanguages:[]
    },
    reducers:{
       findUsers: (state,datas)=>{
         //  console.log('action',username.payload)
            /*FindUsers(username.payload)
            .then((datas)=>datas)
            .finally((datas)=>{
                state.data.push(datas)
            })*/
            state.dataUsers = [datas.payload]
    
           
        },
        findRepositories:(state,datas)=>{
            state.dataRepos = [datas.payload]
        },
        findMostUsedLanguages:(state,datas)=>{
           state.dataMostUsedLanguages = [...datas.payload]
        }

    }
})

export const {findUsers,findRepositories,findMostUsedLanguages} = actionSlice.actions

export default actionSlice.reducer