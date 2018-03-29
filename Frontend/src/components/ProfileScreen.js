import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,

} from 'react-native';

import ProfilePhotos from './ProfilePageElements/ProfilePhotos'

class ProfileScreen extends Component {

  render() {
    return (
      <ScrollView style = {{flex : 1}}>
          <ProfilePhotos/>
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



