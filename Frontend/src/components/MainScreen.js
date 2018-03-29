import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Icon } from 'native-base';
import { TabNavigator, TabView, TabBarTop} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchSreen';
import HomeTab from './AppTabNavigator/HomeTab';
import AddTab from './AppTabNavigator/AddTab';
import MapTab from './AppTabNavigator/MapTab';

class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
        headerLeft: 
            <Icon style={{ paddingLeft: 10 }} name="person" onPress={() => navigation.navigate('Profile')}/>, 
        headerRight: 
            <Icon style={{ paddingRight: 10 }} name="search" onPress={() => navigation.navigate('Search')}/>

        }
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
        // tabBarComponent: ({ navigation, ...rest}) => <TabBarTop {...rest} navigation={{ ...navigation, state: { ...navigation.state, routes: navigation.state.routes.filter(r => r.name !== '') } }}/>

    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
});
