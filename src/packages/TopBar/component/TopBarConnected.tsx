import {connectWithShell, ExtensionSlot, Shell} from "repluggable";
import {TopBarComponentPure} from "./TopBarComponentPure";
import {TopBarAPI} from "../Api/TopBarAPI";

export interface TopBarStateProps {
    slot: ExtensionSlot<any>
}

const mapStateToProps = (shell: Shell): TopBarStateProps => {
    const topBarApi = shell.getAPI(TopBarAPI)

    return {
        slot: topBarApi.getSlot()
    };
};

export const createConnectedTopBar = (boundShell: Shell) => {
    return connectWithShell<{}, {}, TopBarStateProps, {}>(mapStateToProps, undefined, boundShell)(TopBarComponentPure)
}