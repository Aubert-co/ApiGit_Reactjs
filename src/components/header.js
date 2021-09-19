import React from 'react'
import Search from './search'
import Campos from './campos'
import MostUsedLanguages from './MostUsedLanguages'
function Header(){

    return (       
    <header> 
        <Search/>
        <div className="campos">
            <Campos/>
            <MostUsedLanguages/>
        </div>
    </header>
    )
}


export default Header