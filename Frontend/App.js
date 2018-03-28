
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './src/components/MainScreen';
import LoginScreen from './src/components/LoginScreen';
import { connect } from 'react-redux';

// * * * * Uncomment line below to activate the main page navigation * * * *
// import MainScreen from './src/components/MainScreen';


// * * * * Uncomment line below to activate the Login Page Screen * * * *
// import LoginScreen from './src/components/LoginScreen';

import { addNum, minNum } from './src/store/actions/number'


class App extends Component {

  render() {
    return (
      <AppStackNavigator/>
      // * * * * Uncomment line below to activate the main page navigation * * * *
      // <AppStackNavigator/>


      // * * * *Uncomment line below to activate the Login Page Screen * * * *
      // <LoginScreen/>

      //* * * * Uncomment 5 lines below to activate the Redux Trial * * * *
      // <View>
      // <Text>{this.props.displaynumber}</Text>
      // <Button title="Add" onPress={this.props.OnAdd} />
      // <Button title="Min" onPress={this.props.OnMin} />
      // </View>
    );
  }
}

// * * * * Uncomment 5 lines below to activate the main page navigation * * * *
const AppStackNavigator = StackNavigator ({
  Main: {
    screen: MainScreen
  },
  Profile: {
    screen: LoginScreen
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


// * * * * Uncomment all lines below to activate the Redux Trial * * * *
const mapStateToProps = state => {
  return {
    displaynumber: state.numbers.counter
  }
}

const mapDispatchToProps = dispatch => {
  return{
    OnAdd: () => dispatch({type: 'ADD_NUM'}),
    OnMin: () => dispatch({type: 'MIN_NUM'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)