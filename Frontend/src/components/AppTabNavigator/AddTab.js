import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base';
import AddEvents from '../AddEvents'

class AddTab extends Component {

  static navigatorOptions = {
    
        tabBarIcon: ({tintColor}) => (
          <icon name="ios-add-circle" style={{color: tintColor}}/>
        )
      }

  render() {
    return (
      <AddEvents/>
    );
  }
}

export default AddTab;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

  },
});

