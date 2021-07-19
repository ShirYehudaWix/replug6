import { AnyAction } from 'redux';
export const INCREASE="INCREASE"
export const DECREASE="DECREASE"




export interface ControlsActions {
    increaseCount: () => AnyAction;
    decreaseCount: () => AnyAction;
}

export const ZoomBarActions: ControlsActions = {
    increaseCount: (): AnyAction => ({
        type: INCREASE,
    }),
    decreaseCount: (): AnyAction => ({
        type: DECREASE,
    }),
};