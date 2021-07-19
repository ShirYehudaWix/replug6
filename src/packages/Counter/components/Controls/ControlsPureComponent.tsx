import React from 'react';
import style from "../../counterSytle.module.css"
import {ControlsDispatchProps} from "./ConnectedControls";

export const Controls = (props: ControlsDispatchProps) => {

    return (
        <div className={style.controls}>
            <div>
                this is my controls
            </div>
            <button onClick={props.increase}>+</button>
            <button onClick={props.decrease}>-</button>
        </div>
    );
}