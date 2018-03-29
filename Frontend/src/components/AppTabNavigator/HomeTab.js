import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
 
} from 'react-native';
import { Icon } from 'native-base';
import Carousel from '../Carousel'
import ProfilePhotos from '../ProfilePageElements/ProfilePhotos'

class HomeTab extends Component {

  static navigatorOptions = {

    tabBarIcon: ({tintColor}) => (
      <icon name="ios-home" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
    <ScrollView>
     <Carousel/>
     <ProfilePhotos/>
     </ScrollView>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    
      

  },
});
