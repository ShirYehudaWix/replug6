import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {TopBarComponentPure} from "../component/TopBarComponentPure";
import {createTopBarAIP, TopBarAPI} from "../Api/TopBarAIP";

export const TopBarUIEntryPoint:EntryPoint={
    name:"Top Bar",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    declareAPIs(): SlotKey<any>[] {
        return [TopBarAPI]
    },
    attach(shell: Shell) {

    },
    extend(shell: Shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><TopBarComponentPure/>})
        shell.contributeAPI(TopBarAPI,()=>createTopBarAIP)
    }
}