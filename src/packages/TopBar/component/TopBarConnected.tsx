import {connectWithShell, ExtensionSlot, ReactComponentContributor, Shell} from "repluggable";
import {TopBarComponentPure} from "./TopBarComponentPure";
import {ContributedComponent, TopBarAPI, createTopBarAIP, TopBarComponentContribution} from "../Api/TopBarAPI";
import {componentsSlotKey} from "../../mainView/mainViewAPI";

// const mapDispatchToProps = (shell: Shell): ZoomBarDispatchProps => {
//
//     return {
//
//     };
// };
//
export interface TopBarStateProps{
    slot:ExtensionSlot<any>
    print:()=>void
}
const mapStateToProps = (shell: Shell): TopBarStateProps => {
const topBarApi=shell.getAPI(TopBarAPI)

    return {
    print:topBarApi.print,
        slot:topBarApi.getSlot()
    };
};


export const createConnectedTopBar=(boundShell:Shell)=>{
    return connectWithShell<{},{},TopBarStateProps,{}>(mapStateToProps,undefined,boundShell)(TopBarComponentPure)
}