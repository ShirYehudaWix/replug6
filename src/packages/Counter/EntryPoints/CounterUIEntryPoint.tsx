import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {CounterPureComponent} from "../components/Counter/CounterPureComponent";

import {createConnectedCounter} from "../components/Counter/ConnectedCounter";
import React from "react";


export const CounterUIEntryPoint:EntryPoint={
    name:"Counter UI",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    extend(shell: Shell) {
        const Counter=createConnectedCounter(shell)
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><Counter/>})

    }
}