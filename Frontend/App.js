
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import MainScreen from './src/components/MainScreen';
// import LoginScreen from './src/components/LoginScreen';
//import { addNum, minNum } from './src/store/actions/numberExport'


class App extends Component {

  render() {
    return (
      <AppStackNavigator/>
      // <LoginScreen/>
      // <View>
      // <Text>{this.props.displaynumber}</Text>
      // <Button title="Add" onPress={this.props.OnAdd} />
      // <Button title="Min" onPress={this.props.OnMin} />
      // </View>
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