import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {TopBarComponentPure} from "../component/TopBarComponentPure";
import {createTopBarAIP, TopBarAPI, TopBarAPISlotKey} from "../Api/TopBarAPI";

export const TopBarUIEntryPoint:EntryPoint={
    name:"Top Bar",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    declareAPIs() {
        return [TopBarAPISlotKey]
    },
    attach(shell: Shell) {
        shell.contributeAPI(TopBarAPISlotKey,()=>createTopBarAIP(shell))

    },
    extend(shell: Shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><TopBarComponentPure/>})
    }
}