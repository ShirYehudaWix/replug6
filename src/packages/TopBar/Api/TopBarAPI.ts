import {ExtensionSlot, ReactComponentContributor, Shell, SlotKey, SlotRenderer} from "repluggable";
import React from "react";
import {componentsSlotKey} from "../../mainView/mainViewAPI";

export const TopBarAPI: SlotKey<TopBarAPI> = {
    name: "Top Bar API",
    public: true
}

export interface TopBarComponentContribution {

}

export const TopBarComponentContributionSlotKey: SlotKey<TopBarComponentContribution> = {
    name: "Top Bar Component Contribution SlotKey",

}

export interface ContributedComponent {
    component: ReactComponentContributor;

}

export interface TopBarAPI {
    component: (fromShell: Shell, contribution: ContributedComponent) => void,
    getSlot: () => ExtensionSlot<TopBarComponentContribution>,
    print: () => void
}

export const createTopBarAIP = (shell: Shell): TopBarAPI => {
    const contributeSlot=shell.declareSlot(TopBarComponentContributionSlotKey)
    const contributeComponent: TopBarAPI["component"] = (fromShell, contribution) => {
        contributeSlot.contribute(fromShell, contribution)
    }
    const giveSlot = () => {
        return shell.getSlot(TopBarComponentContributionSlotKey)
    }
    const print = () => {
        console.log("hello")
    }
    return {
        component: contributeComponent,
        getSlot: giveSlot,
        print
    }
}