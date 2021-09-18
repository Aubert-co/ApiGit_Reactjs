import { createSlice } from "@reduxjs/toolkit";
import FindUsers from "../services/findUsers";

export const actionSlice = createSlice({
    name:'actions',
    initialState:{
        data:[]
    },
    reducers:{
       findUsers: (state,datas)=>{
         //  console.log('action',username.payload)
            /*FindUsers(username.payload)
            .then((datas)=>datas)
            .finally((datas)=>{
                state.data.push(datas)
            })*/
            state.data = []
            state.data.push(datas.payload)
           
        },
        SelectDatas:(state)=>{
           console.log(state.data)
        }

    }
})

export const {findUsers,SelectDatas} = actionSlice.actions

export default actionSlice.reducer