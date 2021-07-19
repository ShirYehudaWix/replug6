
import { CounterState } from './counterInitialState';

export interface CounterSelectors {
    counterValue: () => number;
}

export interface CounterScopedState {
    counter: CounterState;
}

export function createCounterSelectors(
    getState: () => CounterScopedState,
): CounterSelectors {
    const counterState = (): CounterState => getState().counter;
    return {
        counterValue() {
            return counterState().count;
        },
    };
}