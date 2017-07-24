/**
 * Created by 蒋坤明 on 2017/7/4.
 */
import Constants from '../Constants'
import request from '../request/RequestUtils'
export default function HistoryDetailAction(data){
    return dispatch=> {
        request(Constants.HISTORDETAILYURL, data, function (obj) {
            console.log(obj);
            if(obj.length>0)
            dispatch(fetchSuccess( obj[0]));
        }, function (error) {
            console.log(error);
        });
    }
}


function fetchSuccess(history){
    return {
            type: Constants.FETHISTORYDETAILSUCCESS,
            history:history
    }
}

export function fetchFailed(){
    return {
        type: Constants.FETHISTORYDETAILFAILED
    }
}