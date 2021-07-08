import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {TopBarComponentPure} from "../component/TopBarComponentPure";

export const TopBarUIEntryPoint:EntryPoint={
    name:"Top Bar",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    attach(shell: Shell) {

    },
    extend(shell: Shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><TopBarComponentPure/>})
    }
}