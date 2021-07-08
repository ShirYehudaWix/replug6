import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {CounterPureComponent} from "../components/Counter/CounterPureComponent";

export const CounterUIEntryPoint:EntryPoint={
    name:"Counter UI",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    extend(shell: Shell) {
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><CounterPureComponent/>})
    }
}