import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class ScreenTwo extends Component{
    render() {
        return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>ScreenTwo</Text>
            </View>
        );
    }
}