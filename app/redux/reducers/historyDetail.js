/**
 * Created by 蒋坤明 on 2017/7/3.
 */
import Constants from '../Constants'
const initialState = {
    history:null,
    fech:''
}

export default function beautyReducers(state = initialState,  action) {
    switch (action.type) {
        case Constants.FETHISTORYDETAILSUCCESS:
            state.history = action.history;
            return Object.assign({}, state);
            break;
        case Constants.FETHISTORYDETAILFAILED:
            state.fech='failed';
            return Object.assign({}, state);
            break;
        default:
            return state;
    }
}
