import style from "../../counterSytle.module.css"
import {CounterStateProps} from "./ConnectedCounter";

export const CounterPureComponent=(props:CounterStateProps)=>{
   return  <div className={style.counter}>
        <div>
            this is my counter
            {props.counterValue}
        </div>
    </div>
}