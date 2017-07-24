/**
 * Created by 蒋坤明 on 2017/7/4.
 */
import Constants from '../Constants'
import request from '../request/RequestUtils'
export default function HistoryAction(data){
    return dispatch=> {
        request(Constants.HISTORYURL, data, function (obj) {
            console.log(obj);
            dispatch(fetchSuccess( obj));
        }, function (error) {
            console.log(error);
        });
    }
}


function fetchSuccess(historyList){
    return {
            type: Constants.FETHISTORYSUCCESS,
            historyList:historyList
    }
}

export function fetchFailed(){
    return {
        type: Constants.FETHISTORYFAILED
    }
}