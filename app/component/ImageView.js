/**
 * Created by ½¯À¤Ã÷ on 2017/7/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal
    } from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';



export default class ImageView extends React.Component {
    static navigationOptions = {
        header:null
    };
    render() {
        let images = this.props.navigation.state.params.images;
        return (
            <View style={styles.container}>
                <ImageViewer imageUrls={images}/>
            </View>
        )
    }
}
const styles = {
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
    },
};