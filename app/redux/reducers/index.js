import {combineReducers} from 'redux';
import history from './history';
import historyDetail from './historyDetail';

const rootReducer = combineReducers({
	history,
	historyDetail
})

export default rootReducer;
