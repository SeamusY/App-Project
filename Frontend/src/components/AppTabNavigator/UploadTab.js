import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Icon } from 'native-base';


class UploadTab extends Component {

  render() {
    return (
       <ScrollView>
         <Text>
             Upload Photo
          </Text>
        </ScrollView>
 


        );
  }
}

export default UploadTab;

const styles = StyleSheet.create({
          container: {
          flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

  },
});



