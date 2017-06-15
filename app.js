/**
 * Created by zhudong on 2017/6/14.
 */
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import {AppRegistry, Image, View, Dimensions, Text, StyleSheet } from 'react-native';

const {ScreenWidth, ScreenHeight} = Dimensions.get('window');
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            isShow: false,
            items:[]
        }
    }

    componentDidMount() {
        var item;
        for (let i = 0; i < 3; i++){
            switch (i){
                case 0:{
                    item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';

                    break;
                }
                case 1:{
                    item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                    break;
                }
                default:{
                    item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                    break;
                }
            }
            this.state.items.push(item);

        }
        console.log(this.state.items + '111');
        this.setState({
            isShow: true,
            items: this.state.items
        })
    }
    render() {
        let H = 200;
        if (this.state.isShow) {
            return(
                <View style={{height: H, alignItems:'center', backgroundColor:'blue'}}>

                    <Swiper autoplay = {true} height = {H} showsPagination = {true} dotColor="white"
                            activeDotColor='yellow' horizontal={true}>
                        {
                            this.state.items.map((item, index) => {
                                console.log(item, index)
                                //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                                return (<Image style={{height: H, width:ScreenWidth}} key = {index} resizeMode='cover' source={{uri: item}}/>)
                            })
                        }

                    </Swiper>
                    <Text style={styles.title}>
                        狗狗的家
                    </Text>
                </View>
            );
        }else {
            return(
                <View style={{height:H, width: ScreenWidth, backgroundColor:'green'}}/>
            );
        }
    }
}

const styles = StyleSheet.create({
    title: {marginTop: 30,position: 'absolute', fontSize: 32, backgroundColor:'transparent'},

})
    AppRegistry.registerComponent('XHBAPP', () => Home);
