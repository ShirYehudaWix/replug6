import {ExtensionSlot, ReactComponentContributor, Shell, SlotKey, SlotRenderer} from "repluggable";
import React from "react";
import {componentsSlotKey} from "../../mainView/mainViewAPI";
import {CounterScopedState, createCounterSelectors} from "../../../store/counterSelector";
import {DECREASE, INCREASE} from "../../../store/actionTypes";

export const ControlsAPI: SlotKey<ControlsAPI> = {
    name: "Controls API",
    public: true
}


export interface CounterContributedComponent {
    component: ReactComponentContributor;

}

export interface ControlsAPI {
    increase:()=>void,
    decrease:()=>void

}


export const createControlsAPI = (shell: Shell): ControlsAPI => {

    return {
        increase:()=>{shell.getStore().dispatch({type: INCREASE})},
        decrease:()=>{
            shell.getStore().dispatch({type: DECREASE})}

    }
}