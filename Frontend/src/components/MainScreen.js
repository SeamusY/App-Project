import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Icon } from 'native-base';
import { TabNavigator, TabView, TabBarTop } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import HomeTab from './AppTabNavigator/HomeTab';
import AddTab from './AppTabNavigator/AddTab';
import RecommendationsTab from './AppTabNavigator/RecommendationsTab';
import UploadTab from './AppTabNavigator/UploadTab';
import LoginScreen from './LoginScreen';



class MainScreen extends Component {

    static navigationOptions = ({ navigation }) => {

        return {
            headerLeft:
            <Icon style={{ paddingLeft: 10 }} name="ios-person" onPress={() => navigation.navigate('Profile')} />,
            headerRight:
            <Icon style={{ paddingRight: 10 }} name="search" onPress={() => navigation.navigate('Search')} />,

        }
        
    }

    render() {
        return (

            <AppTabNavigator />

        );
    }
}

export default MainScreen;


// const AppStackNavigator = StackNavigator({
//     Main: {
//         screen: MainScreen
//     },
//     Profile: {
//         screen: ProfileScreen
//     },
//     Search: {
//         screen: SearchScreen
//     },
//     Login: {
//         screen: LoginScreen
//     }
// },
//     { initialRouteName: 'Main' });


const AppTabNavigator = TabNavigator({

    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => { return (<Icon name="ios-home" />) },
            activeTintColor: '#E75480',
            inactiveTintColor: '#cccccc'
        }
    },
    AddTab: {
        screen: AddTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => { return (<Icon name="ios-paper" />) }
        }
    },
    UploadTab: {
        screen: UploadTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => { return (<Icon name="ios-camera" />) }
        }
    },
    RecommendationsTab: {
        screen: RecommendationsTab,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => { return (<Icon name="ios-bulb" />) }
        }
    }
}, {
        animationEnabled: true,
        swipeEnabled: false,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: '#fff'
                    }
                })
            },
            showIcon: true,
            showLabel: false
        }
    })

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
