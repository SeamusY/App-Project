import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base';

class AddTab extends Component {

  static navigatorOptions = {
    
        tabBarIcon: ({tintColor}) => (
          <icon name="ios-add-circle" style={{color: tintColor}}/>
        )
      }

  render() {
    return (
      <View style={styles.container}>
        <Text>AddTab</Text>
      </View>
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

