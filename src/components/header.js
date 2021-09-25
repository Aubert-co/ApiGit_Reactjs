import React from 'react'
import Search from './search'
import Campos from './campos'
function Header(){

    return (       
    <header> 
        <Search/>
        <div className="campos">
            <Campos/>

        </div>
    </header>
    )
}


export default Header