import {ExtensionSlot, ReactComponentContributor, Shell, SlotKey, SlotRenderer} from "repluggable";
import React from "react";
import {componentsSlotKey} from "../../mainView/mainViewAPI";

export const CounterAPI: SlotKey<CounterAPI> = {
    name: "Counter API",
    public: true
}


export interface CounterContributedComponent {
    component: ReactComponentContributor;

}

export interface CounterAPI {

}

export const createCounterAIP = (shell: Shell): CounterAPI => {

    return {

    }
}