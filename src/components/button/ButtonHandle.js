import {useState} from 'react';
import './buttonHandle.css'
import React from 'react'

function ButtonHandle(){
    const [counter, setCounter] = useState(0)
    const clickCounter = ()  =>{
        setCounter(counter+1)
    }



    return(
        <div>
            <p>{counter}</p>
            <button className="botoncito" onClick={clickCounterg} >Aleatorio</button>
        </div>
    )
}
export default ButtonHandle