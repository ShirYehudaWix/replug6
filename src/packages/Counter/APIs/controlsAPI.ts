import { Shell, SlotKey} from "repluggable";

import {DECREASE, INCREASE} from "../../../store/actionTypes";

export const ControlsAPI: SlotKey<ControlsAPI> = {
    name: "Controls API",
    public: true
}

export interface ControlsAPI {
    increase: () => void,
    decrease: () => void
}

export const createControlsAPI = (shell: Shell): ControlsAPI => {

    return {
        increase: () => {
            shell.getStore().dispatch({type: INCREASE})
        },
        decrease: () => {
            shell.getStore().dispatch({type: DECREASE})
        }


    }
}