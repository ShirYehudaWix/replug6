import React, {FunctionComponent, useState} from 'react';
import style from "../../counterSytle.module.css"//counterSytle.module.css"
interface ControlsProps{
    increase:()=>void,
    decrease:()=>void
}
export const Controls = () => {
const increase:()=>void=()=>{console.log("increase")}
const decrease:()=>void=()=>{
    console.log("decrease")
    }
 return   (

        <div className={style.controls}>
            <div>
                this is my controls
            </div>

            <button onClick={increase} >+</button>
            <button  onClick={decrease} >-</button>

        </div>
    );
}