import {ReactComponentContributor, Shell, SlotKey} from "repluggable";

export const TopBarAPISlotKey:SlotKey<ContributedComponent>={
    name:"Top Bar API",
    public:true
}
export interface ContributedComponent {
    component: ReactComponentContributor;
}
export interface TopBarAPI {
component:(fromShell:Shell, contribution: ContributedComponent)=>void
}

export const createTopBarAIP=(shell: Shell):TopBarAPI =>{
    const contributeComponent:TopBarAPI["component"]=(fromShell, contribution)=>{
        shell.declareSlot(TopBarAPISlotKey).contribute(fromShell, contribution)
    }
    return{
    component: contributeComponent
    }
}