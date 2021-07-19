import {ExtensionSlot, ReactComponentContributor, Shell, SlotKey, SlotRenderer} from "repluggable";
import React from "react";
import {componentsSlotKey} from "../../mainView/mainViewAPI";
import {CounterScopedState, createCounterSelectors} from "../../../store/counterSelector";

export const CounterAPI: SlotKey<CounterAPI> = {
    name: "Counter API",
    public: true
}


export interface CounterContributedComponent {
    component: ReactComponentContributor;

}

export interface CounterAPI {
    getCounterValue: () => number

}


export const createCounterAIP = (shell: Shell): CounterAPI => {
    const store = shell.getStore<CounterScopedState>()
    const selector = createCounterSelectors(() => store.getState())

    const getCounterValue = () => {
        return selector.counterValue()
    }
    return {
        getCounterValue
    }
}