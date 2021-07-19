import {AnyAction} from "redux";
import {CounterState} from "./counterInitialState";
import * as actionTypes from "./actionTypes"
import {initialState} from "./counterInitialState";

export const counterReducer = (
    state: CounterState = initialState,
    action: AnyAction
): CounterState => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return {count: state.count + 1}
        case actionTypes.DECREASE:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}
// export default counterReducer;