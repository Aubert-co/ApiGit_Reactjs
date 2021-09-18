import { createSlice } from "@reduxjs/toolkit";
import FindUsers from "../services/findUsers";

export const actionSlice = createSlice({
    name:'actions',
    initialState:{
        dataUsers:[],
        dataRepos:[]
    },
    reducers:{
       findUsers: (state,datas)=>{
         //  console.log('action',username.payload)
            /*FindUsers(username.payload)
            .then((datas)=>datas)
            .finally((datas)=>{
                state.data.push(datas)
            })*/
            state.dataUsers = []
            state.dataUsers.push(datas.payload)
           
        },
        findRepositories:(state,datas)=>{
            state.dataRepos = []
            state.dataRepos.push(datas.payload)
        }

    }
})

export const {findUsers,findRepositories} = actionSlice.actions

export default actionSlice.reducer