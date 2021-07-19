import {connectWithShell, ExtensionSlot, ReactComponentContributor, Shell} from "repluggable";

import {CounterAPI} from "../../APIs/counterAPI";
import {CounterPureComponent} from "../Counter/CounterPureComponent";
import {Controls} from "./ControlsPureComponent";

// const mapDispatchToProps = (shell: Shell): ZoomBarDispatchProps => {
//
//     return {
//
//     };
// };
//
// export interface CounterStateProps{
//     counterValue:number
// }
// const mapStateToProps = (shell: Shell): CounterStateProps => {
//     const counterApi=shell.getAPI(CounterAPI)
//
//     return {
//         counterValue:counterApi.getCounterValue()
//     };
// };


export const createConnectedControls=(boundShell:Shell)=>{
    return connectWithShell<{},{},{},{}>(undefined,undefined,boundShell)(Controls)
}