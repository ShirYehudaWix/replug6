import '../topBarStyle.css';
import {TopBarStateProps} from "./TopBarConnected";
import {ExtensionSlot, SlotRenderer} from "repluggable";
import {ContributedComponent} from "../Api/TopBarAPI";

const slotItemToComp = ({component}: ContributedComponent) => component

export const TopBarComponentPure = (props:TopBarStateProps) => (
    <div className="topBar">
        <div>
            this is my top bar
        </div>
        <SlotRenderer slot={props.slot} mapFunc={slotItemToComp}/>
    </div>
)