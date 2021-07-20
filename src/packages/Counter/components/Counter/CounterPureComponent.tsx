import style from "../../counterSytle.module.css"
import {CounterStateProps} from "./ConnectedCounter";

// Nir: Pure components should not get the props type from the connected types
export const CounterPureComponent = (props: CounterStateProps) => {
    return <div className={style.counter}>
        <div>
            this is my counter
            {props.counterValue}
        </div>
    </div>
}