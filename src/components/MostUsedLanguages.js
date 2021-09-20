import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

function convertValues(array){
    const vvs = {}
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
    const v  = async (link)=>{
        
    }

    useEffect(()=>{
       
        data.map(({languages_url})=>{ 
            const m =  fetch(languages_url)
            .then((datas)=>datas.json())
            .then((d)=>{
                a.push(d)
            })
            .finally(()=>{
                console.log(a)
            })
        })
    
    
       
    },[data])
    return (
        <h1>Ola</h1>
    )
}


export default MostUsedLanguages