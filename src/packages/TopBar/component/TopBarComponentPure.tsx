import '../topBarStyle.css';
import {TopBarStateProps} from "./TopBarConnected";
import {SlotRenderer} from "repluggable";
import {ContributedComponent} from "../Api/TopBarAPI";

const slotItemToComp = ({component}: ContributedComponent) => component
// Nir: Pure components should not get the prop's type from the connected types
export const TopBarComponentPure = (props: TopBarStateProps) => (
    <div className="topBar">
        <div>
            this is my top bar
        </div>
        <SlotRenderer slot={props.slot} mapFunc={slotItemToComp}/>
    </div>
)