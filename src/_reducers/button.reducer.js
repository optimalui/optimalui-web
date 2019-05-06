import { buttonConstants } from '../_constants'

const buttonInitialState ={
    disableIds :[]
}

export const buttonReducer = (state = buttonInitialState, action) => {
    switch (action.type) {
        case buttonConstants.DISABLE_BUTTON:
            return {
                ...state,
                disableIds: [...state.disableIds,action.id]
            }
        default:
           return state;
    }
}