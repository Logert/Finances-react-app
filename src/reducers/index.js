import { combineReducers } from 'redux';
import JournalReducer from './Journal-reducer';
import MoneyReducer from './Money-reducer'

const rootReducer = combineReducers({
    JournalReducer,
    MoneyReducer
});

export default rootReducer;