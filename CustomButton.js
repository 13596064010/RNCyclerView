/**
 * Created by zhudong on 2017/6/9.
 */

import React from 'react';
import {View, TouchableHighlight, Text, Alert } from 'react-native';

export default class CustomButton extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <TouchableHighlight style={{backgroundColor: this.props.color}}
                                onPress={this.props.onPress}
                                >
                <Text>{this.props.title}
                </Text>
            </TouchableHighlight>
        );
    }
}

function Test(props) {
    // return <View style={{height: 50, width: 50, backgroundColor:'green'}}> </View>;
    alert('function');
}
    /*
    *
    * */
module.exports = CustomButton