import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';

class ProfileHeader extends Component {

  render() {
    return (
      
      <ImageBackground style = {styles.headerBackground} source={require('../../../rainbowbg.jpg')}>

          <View style={styles.header}>

              <View style = {styles.propicContainer}>
                    <Image style={styles.propic} source={require('../../../doge.jpg')}/>
              </View>

              <Text style = {styles.myname}>I AM A DOGE</Text>
              <Text style = {styles.mydescribe}>WEB DEVELOPER</Text>

          </View>

      </ImageBackground>
      
    );
  }
}

export default ProfileHeader

const styles = StyleSheet.create({
  headerBackground: {
      flex: 1,
      width: null,
      alignSelf: 'stretch'
},
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  propicContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,

  },
  propic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2
  },
  myname: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
  mydescribe: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300'
  }
});
