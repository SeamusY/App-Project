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

class RecommendationsTab extends Component {

  render() {
    return (
       <ScrollView>
        <Recommendations/>
        </ScrollView>
 


        );
  }
}

export default RecommendationsTab;

const styles = StyleSheet.create({
          container: {
          flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

  },
});



