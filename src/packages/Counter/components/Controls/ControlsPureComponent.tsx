import React, {FunctionComponent, useState} from 'react';
import style from "../../counterSytle.module.css"//counterSytle.module.css"
interface ControlsProps{
    increase:()=>void,
    decrease:()=>void
}
export const Controls = () => {
const increase:()=>void=()=>{

    }
 return   (

        <div className={style.controls}>
            <div>
                this is my controls
            </div>

            <button onClick={increase} >+</button>
            <button  >-</button>

        </div>
    );
}