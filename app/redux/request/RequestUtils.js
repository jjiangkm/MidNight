/**
 * Created by 蒋坤明 on 2017/6/20.
 */
const request = function(url,data,success,errorCallback){
    console.log(data);
    let map = {method:'POST',credentials:'include'}
    let privateHeader = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    map.headers = privateHeader;
    map.body=getRequestBody(data);
        fetch(url,map)
        .then((response)=> response.json())
        .then((obj)=>{
            console.log(obj)
            if(obj.error_code=='0'){
                success(obj.result);
            }
        },(error)=>{
                console.log(error);
            errorCallback(error);
        }).catch((error)=>{
                console.log(error);
            errorCallback(error);
        });
}
function getRequestBody(data){
    let dataString = '';
    for(let key in data){
        dataString += key+'='+data[key]+'&';
    }
    return dataString.substring(0,dataString.length-1);
}
export default  request;