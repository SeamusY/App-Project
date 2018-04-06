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
<<<<<<< HEAD
=======

>>>>>>> bd58374d24534cc3050cdebfbd505784c8ad0ff9

class HomeTab extends Component {

  static navigatorOptions = {

    tabBarIcon: ({tintColor}) => (
      <icon name="ios-home" style={{color: tintColor}}/>
    )
  }

  render() {
    return (
<<<<<<< HEAD
     <Carousel/>
=======
    <ScrollView>
     <Carousel/>

     </ScrollView>
>>>>>>> bd58374d24534cc3050cdebfbd505784c8ad0ff9
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
