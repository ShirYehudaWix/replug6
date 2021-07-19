import {EntryPoint, Shell, SlotKey} from "repluggable";
import React from "react";
import {CounterAPI, createCounterAIP} from "../APIs/counterAPI";

import {counterReducer} from "../../../store/counterReducer";

export const CounterDataEntryPoint: EntryPoint = {
    name: "Counter Data",
    declareAPIs(): SlotKey<any>[] {
        return [CounterAPI]
    },
    attach(shell: Shell) {
        shell.contributeAPI(CounterAPI, () => createCounterAIP(shell))
        shell.contributeState(() => ({counter: counterReducer}))
    },

    extend(shell: Shell) {

    }
}