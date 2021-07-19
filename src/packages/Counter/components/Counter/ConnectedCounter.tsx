import {connectWithShell, ExtensionSlot, ReactComponentContributor, Shell} from "repluggable";

import {CounterPureComponent} from "./CounterPureComponent";

// const mapDispatchToProps = (shell: Shell): ZoomBarDispatchProps => {
//
//     return {
//
//     };
// };
//
// export interface TopBarStateProps{
//     slot:ExtensionSlot<any>
// }
// const mapStateToProps = (shell: Shell): TopBarStateProps => {
//     const topBarApi=shell.getAPI(TopBarAPI)
//
//     return {
//         slot:topBarApi.getSlot()
//     };
// };


export const createConnectedCounter=(boundShell:Shell)=>{
    return connectWithShell<{},{},{},{}>(undefined,undefined,boundShell)(CounterPureComponent)
}