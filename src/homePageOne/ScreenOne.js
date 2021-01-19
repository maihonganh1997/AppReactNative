import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import ScreenTwo from "../homePageTwo/ScreenTwo";

export default class ScreenOne extends Component{
    render() {
        return (
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: '100%'}} onPress={() => this.props.navigation.navigate("ScreenTwo")}>
                <Text style={{fontSize: 20}}>ScreenOne</Text>
            </TouchableOpacity>
        );
    }
}