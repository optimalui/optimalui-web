import { menuConstants } from '../_constants'

const clickModeInitialState ={
    clickModeMenues :[]
}

export const clickModeMenuReducer = (state = clickModeInitialState, action) => {
    switch (action.type) {
        case menuConstants.CLICK_MODE:
            return {
                ...state,
                clickModeMenues: [...state.clickModeMenues,action.id]
            }
        default:
           return state;
    }
}