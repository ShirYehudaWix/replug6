import {ReactComponentContributor, Shell, SlotKey,} from "repluggable";
import {CounterScopedState, createCounterSelectors} from "../../../store/counterSelector";

export const CounterAPI: SlotKey<CounterAPI> = {
    name: "Counter API",
    public: true
}
// Nir: unused interface
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