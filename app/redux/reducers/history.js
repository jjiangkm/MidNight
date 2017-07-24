/**
 * Created by 蒋坤明 on 2017/7/3.
 */
import Constants from '../Constants'
const initialState = {
    historyList:[],
    fech:''
}

export default function beautyReducers(state = initialState,  action) {
    switch (action.type) {
        case Constants.FETHISTORYSUCCESS:
            state.historyList = action.historyList;
            return Object.assign({}, state);
            break;
        case Constants.FETHISTORYFAILED:
            state.fech='failed';
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}
