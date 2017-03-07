import { combineReducers } from 'redux';
import JournalReducer from './Journal-reducer';
import MoneyReducer from './Money-reducer'
import KategoryReducer from './Kategory-reducer'
import CurrencyReducer from './Currency-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    JournalReducer,
    MoneyReducer,
    KategoryReducer,
    CurrencyReducer,
    routing: routerReducer
});

export default rootReducer;