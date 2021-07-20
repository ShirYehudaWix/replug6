import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {createConnectedCounter} from "../components/Counter/ConnectedCounter";
import React from "react"; //Nir: clean unused imports
import {CounterAPI} from "../APIs/counterAPI";

export const CounterUIEntryPoint: EntryPoint = {
    name: "Counter UI", //Nir: maybe add 'Entry Point' in the end
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI, CounterAPI]
    },

    extend(shell: Shell) {
        const Counter = createConnectedCounter(shell)
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <Counter/>})
        // Nir: Here the controls should be contributed to the topBar
    }
}