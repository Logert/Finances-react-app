import { combineReducers } from 'redux';
import reducerJournal from './reducer-journal';

const rootReducer = combineReducers({
    journal: reducerJournal
});

export default rootReducer;