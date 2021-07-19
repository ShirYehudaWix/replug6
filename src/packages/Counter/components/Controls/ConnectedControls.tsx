import {connectWithShell, ExtensionSlot, ReactComponentContributor, Shell} from "repluggable";

import {CounterAPI} from "../../APIs/counterAPI";
import {CounterPureComponent} from "../Counter/CounterPureComponent";
import {Controls} from "./ControlsPureComponent";
import {ControlsAPI} from "../../APIs/controlsAPI";

const mapDispatchToProps = (shell: Shell): ControlsDispatchProps => {
    const controlsApi = shell.getAPI(ControlsAPI)
    return {
        increase: controlsApi.increase,
        decrease: controlsApi.decrease
    };
}

export interface ControlsDispatchProps {
    increase:()=>void,
    decrease:()=>void
}
// const mapStateToProps = (shell: Shell): CounterStateProps => {
//     const counterApi=shell.getAPI(CounterAPI)
//
//     return {
//         counterValue:counterApi.getCounterValue()
//     };
// };


export const createConnectedControls=(boundShell:Shell)=>{
    return connectWithShell<{},{},{},ControlsDispatchProps>(undefined,mapDispatchToProps,boundShell)(Controls)
}