import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,

} from 'react-native';

import ProfileHeader from './ProfilePageElements/ProfileHeader'
import ProfilePhotos from './ProfilePageElements/ProfilePhotos'

class ProfileScreen extends Component {

  render() {
    return (
      <ScrollView style = {{flex : 1}}>
          <ProfileHeader/>
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



