/**
 * Created by 蒋坤明 on 2017/7/19.
 */
import { StackNavigator } from 'react-navigation';
import HistoryToday from './historytoday/HistoryToday'
import HistoryTodayDetail from './historytoday/HistoryTodayDetail'
import ImageView from './component/ImageView'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';//android左右滑动切页
const SimpleApp = StackNavigator({
    HistoryToday: { screen: HistoryToday },
    HistoryTodayDetail: { screen: HistoryTodayDetail },
    ImageView: { screen: ImageView },
},{
    initialRouteName: 'HistoryToday', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        headerTintColor:'#ffffff',
        headerStyle: { backgroundColor: '#07af81'},
        gesturesEnabled:true
    },
    transitionConfig:()=>({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});
export default SimpleApp;