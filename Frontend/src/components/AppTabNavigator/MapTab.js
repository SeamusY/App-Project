import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Icon } from 'native-base';
import Recommendations from '../Recommendations';

class MapTab extends Component {

  render() {
    return (
       <ScrollView>
        <MapEvents />
        </ScrollView>
 


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



