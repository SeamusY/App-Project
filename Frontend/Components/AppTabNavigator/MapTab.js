import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base';

class MapTab extends Component {

  static navigatorOptions = {
    
        tabBarIcon: ({tintColor}) => (
          <icon name="ios-map" style={{color: tintColor}}/>
        )
      }

  render() {
    return (
      <View style={styles.container}>
        <Text>MapTab</Text>
      </View>
    );
  }
}

export default MapTab;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

  },
});



