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
    ScrollView,
    ActivityIndicator
    } from 'react-native';
import {connect} from 'react-redux';
import HistoryDetailAction from '../redux/action/HistoryDetailAction';
const {height,width} = Dimensions.get('window');
import Constants from '../redux/Constants';
class HistoryTodayDetail extends React.Component {
    static navigationOptions = {
        title:"历史上的今天"
    };
    constructor(props){
        super(props);
        this.state = props.navigation.state.params.history;
        Image.getSize( this.state.pic,(width,height)=>{this.setState({width:width,height:height})},(error)=>{console.log(error)});
        this.getImage = this.getImage.bind(this);
    }
    componentWillMount(){
        const {dispatch} = this.props;
        InteractionManager.runAfterInteractions(() => {
            let myDate = new Date();
            let data = {
                id:this.state._id
            };
            dispatch(HistoryDetailAction(data))
        });
    }
    getImage(log){
        if(log.pic!=null)
        return ( <TouchableOpacity activeOpacity={0.9} onPress={()=>this.props.navigation.navigate('ImageView',{images:[{url:log.pic}]})}>
            <Image style={{width:log.width,height:log.height}} source={{uri:log.pic}}
                   ></Image>
        </TouchableOpacity>);
    }
    render() {
        const {historyDetail} = this.props;
        let content = null;
        if(historyDetail.history!=null&&historyDetail.history._id==this.state._id){
            content = historyDetail.history.content;
        }
        return (<ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.title}</Text>
                <Text style={styles.time}>{this.state.year}-{this.state.month}-{this.state.day}   {this.state.lunar}</Text>
                <Text style={styles.time}>{this.state.des}</Text>
                {this.getImage(this.state)}
                <Text style={styles.time}>{content}</Text>
            </View>
        </ScrollView>);
    }
}
const styles = {
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        color:'#666666',
        maxWidth:width-40,
        margin:10
    },
    time:{
        color:'#aaaaaa',
        maxWidth:width-20,
        margin:10
    },
    rightViewStyle:{
        maxWidth:width-110,
        flexDirection:'column',
    }
};
const mapStateToProps=(state)=> {
    const {historyDetail} = state;
    return {
        historyDetail
    }
};
export default connect(mapStateToProps)(HistoryTodayDetail);