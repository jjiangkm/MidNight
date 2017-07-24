/**
 * Created by 蒋坤明 on 2017/7/19.
 */
import React from 'react';
import {
    Text,
    View,
    AsyncStorage,
    ListView,
    InteractionManager,
    Dimensions,
    Image,
    RefreshControl,
    TouchableOpacity,
    Platform,
    ActivityIndicator
    } from 'react-native';
import HistoryAction from '../redux/action/HistoryAction'
import Constants from '../redux/Constants';
import {connect} from 'react-redux';
const {height,width} = Dimensions.get('window');
class HistoryToday extends React.Component {
    static navigationOptions = {
        title: '历史上的今天',
    };
    constructor(props){
        super(props);
        this.state = {
            historyList:new ListView.DataSource({
                rowHasChanged:(oldRow,newRow) => oldRow !==newRow
            })
        };
        this.renderListItem = this.renderListItem.bind(this);
        this.historyView = this.historyView.bind(this);

    }
    componentWillMount(){
        const {dispatch} = this.props;//解构 let data = {a:{b:1}}; let {a} = data;
        InteractionManager.runAfterInteractions(() => {
            let myDate = new Date();
            let data = {
                month:myDate.getMonth()+1,
                day:myDate.getDate()
            };
            dispatch(HistoryAction(data))
        });
    }
    getImage(log){
        let url = log.pic;
        if(url==''){
            url='http://pic35.nipic.com/20131121/2531170_145358633000_2.jpg';
        }
        return ( <Image style={styles.imageStyle} source={{uri:url}}></Image>);
    }
    historyView(log){
        this.props.navigation.navigate('HistoryTodayDetail',{history:log});
    }
    renderListItem(log,sectionId,rowId){
        if(log.type == 0){
            return (<Text >没有数据</Text>);
        }else {
            return (<TouchableOpacity style={styles.itemContainer} activeOpacity={0.9} onPress={()=>this.historyView(log)}>
                {this.getImage(log)}
                <View style={styles.rightViewStyle}>
                    <Text style={[styles.titleTextStyle,{color:'#666666',fontSize:16}]}
                          ellipsizeMode='tail'
                          numberOfLines={1}>{log.title}</Text>
                    <Text style={[styles.titleTextStyle,{color:'#aaaaaa'}]}
                          ellipsizeMode='tail'
                          numberOfLines={2}>{log.des}</Text>
                    <Text style={[styles.titleTextStyle,{color:'#aaaaaa'}]}
                          ellipsizeMode='tail'
                          numberOfLines={1}>{log.year}年</Text>
                </View>

            </TouchableOpacity>)
        }
    }
    render() {
        const {dispatch,history,category} = this.props;
        if(history.fech=='failed'){
            return (<Text >加载失败</Text>);
        }else{
            return (<ListView
                style={{flex: 1}}
                dataSource={this.state.historyList.cloneWithRows(history.historyList)}
                renderRow={this.renderListItem}
                enableEmptySections={true}
                >
            </ListView>);
        }

    }
}
const styles = {
    itemContainer:{
        flex:1,
        flexDirection:'row',
        height:90,
        padding:5,
        width:width,
        justifyContent:'flex-start',
        borderBottomWidth:0.5,
        borderBottomColor:'#cccccc'
    },
    imageStyle:{
        width:80,
        height:80,
        marginRight:10
    },
    titleTextStyle:{
        maxWidth:width-110
    },
    rightViewStyle:{
        maxWidth:width-110,
        flexDirection:'column',
    }
};
const mapStateToProps=(state)=> {
    const {history} = state;
    return {
        history
    }
};
export default connect(mapStateToProps)(HistoryToday);