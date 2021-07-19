import {EntryPoint, Shell, SlotKey} from "repluggable";
import React from "react";
import {CounterAPI} from "../APIs/counterAPI";

export const CounterDataEntryPoint: EntryPoint = {
    name: "Counter Data",
    declareAPIs(): SlotKey<any>[] {
        return [CounterAPI]
    },
    extend(shell: Shell) {

    }
}