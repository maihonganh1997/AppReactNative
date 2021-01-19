import React, {Component} from "react";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import ScreenOne from "./homePageOne/ScreenOne";
import ScreenTwo from "./homePageTwo/ScreenTwo";

export const Router = createAppContainer(createStackNavigator({
    ScreenOne: {
        screen: ScreenOne
    },
    ScreenTwo: {
        screen: ScreenTwo
    }
}, {headerMode: 'none'}))
