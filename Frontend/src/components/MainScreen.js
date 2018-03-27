import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import AddTab from './AppTabNavigator/AddTab';
import MapTab from './AppTabNavigator/MapTab';

class MainScreen extends Component {

    static navigationOptions = {

        headerLeft: <Icon style={{ paddingLeft: 10 }} name="ios-person" />,
       
        headerRight: <Icon style={{ paddingRight: 10 }} name="ios-search" />

    }

    render() {
        return (

            <AppTabNavigator />

        );
    }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab
    },
    AddTab: {
        screen: AddTab
    },
    MapTab: {
        screen: MapTab
    }

}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: '#fff'
                    }
                })
            },
            activeTintColor: '#E75480',
            inactiveTintColor: '#d1cece',
            showLabel: true,
            showIcon: true,
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
});
