import {Shell, SlotKey} from "repluggable";

export const TopBarAPI:SlotKey<TopBarAIP>={
    name:"Top Bar API",
    public:true
}

export interface TopBarAIP{

}

export const createTopBarAIP:TopBarAIP ={
    // return{
    //
    // }
}