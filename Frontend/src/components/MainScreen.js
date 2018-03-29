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
import HomeTab from './AppTabNavigator/HomeTab';
import AddTab from './AppTabNavigator/AddTab';
import MapTab from './AppTabNavigator/MapTab';

class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
        headerLeft: 
            <Icon style={{ paddingLeft: 10 }} name="person" onPress={() => navigation.navigate('Profile')}/>, 
        headerRight: 
            <Icon style={{ paddingRight: 10 }} name="search" />

        }
    }

    render() {
        return (

            <AppTabNavigator />

        );
    }
}

export default MainScreen;

const AppStackNavigator = StackNavigator ({
    Main: {
      screen: MainScreen
    },
    Profile: {
      screen: ProfileScreen
    },
},
{initialRouteName: 'Main'});

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
