import {connectWithShell, ExtensionSlot, ReactComponentContributor, Shell} from "repluggable";

import {CounterPureComponent} from "./CounterPureComponent";
import {CounterAPI} from "../../APIs/counterAPI";

// const mapDispatchToProps = (shell: Shell): ZoomBarDispatchProps => {
//
//     return {
//
//     };
// };
//
export interface CounterStateProps{
    counterValue:number
}
const mapStateToProps = (shell: Shell): CounterStateProps => {
    const counterApi=shell.getAPI(CounterAPI)

    return {
        counterValue:counterApi.getCounterValue()
    };
};


export const createConnectedCounter=(boundShell:Shell)=>{
    return connectWithShell<{},{},CounterStateProps,{}>(mapStateToProps,undefined,boundShell)(CounterPureComponent)
}