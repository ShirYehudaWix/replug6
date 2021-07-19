import {CounterUIEntryPoint} from "./EntryPoints/CounterUIEntryPoint"
import {EntryPoint} from "repluggable";
import {CounterDataEntryPoint} from "./EntryPoints/CounterDataEntryPoint";

export const CounterPackage: EntryPoint[] = [
    CounterUIEntryPoint,
    CounterDataEntryPoint
]