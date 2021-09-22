import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
const vvs = {}
function convertValues(array){

    const css =array.map((val)=>{
        const k = Object.keys(val)
        k.forEach((value,inde,arrs)=>{
            const name = arrs[inde]
            const v =val[value]
                if(vvs[name] === undefined){
                    vvs[name] =v
                    return 
                }
                vvs[name] +=v
            })
    })
    /*const keys = Object.keys(vvs)
    .forEach((val)=>{
        const number = vvs[val]
        console.log((number/1000))
    })*/
    return vvs
    }
function MostUsedLanguages(){
    const data = useSelector(state=>state.actions.dataMostUsedLanguages)
    var a = [ ]
    const [Value,SetValue] = useState([])
    
  
    async function mm(){
        const vs = async ({languages_url})=>{
            const values  =await fetch(languages_url)
            const js = await values.json()
            a.push(js)
            const m = convertValues(a)
        return m
        }
        const values = data.map(vs)
        return values
          
    }
      
    
    useEffect(async()=>{
       
      /*const bb =   data.map(({languages_url})=>{ 
            return fetch(languages_url)
            .then((datas)=>datas.json())
            .then((d)=>d)
            .finally((d)=>d)
        })*/
       mm()
       .then((d)=>{
           console.log(d)
       })
    },[data])
    return (
        <h1>Ola</h1>
    )
}


export default MostUsedLanguages