import { combineReducers } from 'redux';
import JournalReducer from './Journal-reducer';
import MoneyReducer from './Money-reducer'
import KategoryReducer from './Kategory-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    JournalReducer,
    MoneyReducer,
    KategoryReducer,
    routing: routerReducer
});

export default rootReducer;