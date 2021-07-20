import {connectWithShell, Shell} from "repluggable";
import {CounterPureComponent} from "./CounterPureComponent";
import {CounterAPI} from "../../APIs/counterAPI";

export interface CounterStateProps {
    counterValue: number
}
const mapStateToProps = (shell: Shell): CounterStateProps => {
    const counterApi = shell.getAPI(CounterAPI) // Nir- API instead of Api

    return {
        counterValue: counterApi.getCounterValue()
    };
};

export const createConnectedCounter = (boundShell: Shell) => {
    return connectWithShell<{}, {}, CounterStateProps, {}>(mapStateToProps, undefined, boundShell)(CounterPureComponent)
}