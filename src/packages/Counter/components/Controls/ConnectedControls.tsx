import {connectWithShell, Shell} from "repluggable";
import {Controls} from "./ControlsPureComponent";

import {ControlsAPI} from "../../APIs/controlsAPI";

const mapDispatchToProps = (shell: Shell): ControlsDispatchProps => {
    const controlsApi = shell.getAPI(ControlsAPI)
    return {
        increase: controlsApi.increase,
        decrease: controlsApi.decrease
    };
}

export interface ControlsDispatchProps {
    increase: () => void,
    decrease: () => void
}

export const createConnectedControls = (boundShell: Shell) => {
    return connectWithShell<{}, {}, {}, ControlsDispatchProps>(undefined, mapDispatchToProps, boundShell)(Controls)

}