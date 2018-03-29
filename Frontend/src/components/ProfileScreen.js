import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,

} from 'react-native';

import Header from './ProfilePageElements/Header'
import Photos from './ProfilePageElements/Photos'

class ProfileScreen extends Component {

  render() {
    return (
      <ScrollView style = {{flex : 1}}>
          <Header/>
          <Photos/>
      </ScrollView>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  topcontainer: {
      flex: 1,
      backgroundColor: 'grey'
},
});



