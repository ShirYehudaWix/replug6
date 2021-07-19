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
    contributeComponent: (fromShell: Shell, contribution: ContributedComponent) => void,
    getSlot: () => ExtensionSlot<TopBarComponentContribution>,
}

export const createTopBarAIP = (shell: Shell): TopBarAPI => {
    const contributeSlot=shell.declareSlot(TopBarComponentContributionSlotKey)
    const contributeComponent: TopBarAPI["contributeComponent"] = (fromShell, contribution) => {
        contributeSlot.contribute(fromShell, contribution)
    }
    const giveSlot = () => {
        return shell.getSlot(TopBarComponentContributionSlotKey)
    }
    return {
        contributeComponent: contributeComponent,
        getSlot: giveSlot,


    }
}