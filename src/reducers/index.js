import { combineReducers } from 'redux';
import JournalReducer from './Journal-reducer';
import MoneyReducer from './Money-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    JournalReducer,
    MoneyReducer,
    routing: routerReducer
});

export default rootReducer;