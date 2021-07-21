import {EntryPoint, Shell, SlotKey} from "repluggable";
import {MainViewAPI} from "../../mainView";
import {createTopBarAIP, TopBarAPI} from "../Api/TopBarAPI";
import {createConnectedTopBar} from "../component/TopBarConnected";
import React from "react"; 
import {Controls} from "../../Counter/components/Controls/ControlsPureComponent";
import {createConnectedControls} from "../../Counter/components/Controls/ConnectedControls";
import {ControlsAPI} from "../../Counter/APIs/controlsAPI";
// Nir: clean unused imports
export const TopBarUIEntryPoint: EntryPoint = {
    name: "Top Bar",
    getDependencyAPIs(): SlotKey<any>[] {
        return [MainViewAPI, ControlsAPI] // Nir: topBar should not be dependent on Controls
    },

    declareAPIs() {
        return [TopBarAPI]
    },

    attach(shell: Shell) {
        shell.contributeAPI(TopBarAPI, () => createTopBarAIP(shell))
    },

    extend(shell: Shell) {
        const TopBar = createConnectedTopBar(shell)
        const Controls = createConnectedControls(shell)
        shell.getAPI(MainViewAPI).contributeComponent(shell, {component: () => <TopBar/>})
        shell.getAPI(TopBarAPI).contributeComponent(shell, {component: () => <Controls/>})
        // Nir: contribute the controls component to TopBar should be done from the CounterUIEntryPoint
    }
}