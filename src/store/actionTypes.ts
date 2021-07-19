import { AnyAction } from 'redux';
export const INCREASE="INCREASE"
export const DECREASE="DECREASE"




export interface ZoomBarActions {
    increaseCount: () => AnyAction;
    decreaseCount: () => AnyAction;
}

export const ZoomBarActions: ZoomBarActions = {
    increaseCount: (): AnyAction => ({
        type: INCREASE,
    }),
    decreaseCount: (): AnyAction => ({
        type: DECREASE,
    }),
};