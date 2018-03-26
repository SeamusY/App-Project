
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
 
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen'
 


export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
      // <LoginScreen/>
    );
  }
}

const AppStackNavigator = StackNavigator ({
  Main: {
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
