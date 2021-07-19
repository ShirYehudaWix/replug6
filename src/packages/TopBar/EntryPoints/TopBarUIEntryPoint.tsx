import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {TopBarComponentPure} from "../component/TopBarComponentPure";

import {createTopBarAIP, TopBarAPI} from "../Api/TopBarAPI";
import {createConnectedTopBar} from "../component/TopBarConnected";
import React from "react";
import {componentsSlotKey} from "../../mainView/mainViewAPI";


export const TopBarUIEntryPoint:EntryPoint={
    name:"Top Bar",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI]
    },
    declareAPIs() {

        return [TopBarAPI]
    },
    attach(shell: Shell) {
        shell.contributeAPI(TopBarAPI,()=>createTopBarAIP(shell))


    },
    extend(shell: Shell) {
        const TopBar=createConnectedTopBar(shell)
        shell.getAPI(MainViewAPI).contributeComponent(shell,{component:()=><TopBar />})
        shell.getAPI(TopBarAPI).contributeComponent(shell,{component:()=><div>helloooooo</div>})
    }
}