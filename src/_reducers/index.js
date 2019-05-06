import { combineReducers } from 'redux';
import { clickModeMenuReducer } from './menu.reducer'
import { buttonReducer } from './button.reducer'

const rootReducer = combineReducers({
    clickModeMenuReducer,
    buttonReducer
});

export default rootReducer;