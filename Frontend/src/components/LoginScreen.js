import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Alert
} from 'react-native';
import { Button } from 'native-base'

export default class LoginScreen extends Component{
 
  render() {
    return (
      <ImageBackground source={require('../../DSC06107.jpg')} style={styles.backgroundImage}>
        <View style = {styles.top}>
          <Text style={styles.header}>GO Photer</Text>
        </View>
        <View style = {styles.middle}>
          <Text style={styles.context}>New way to learn photography</Text>
        </View>
        <Button rounded style = {styles.loginButton} onPress = {()=>Alert.alert('Not yet login ar HAHAHAHAHAHAHAA!')}>
          <Text style={styles.buttonText}>Google +</Text>
        </Button>

      </ImageBackground >
    );

  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  top: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontFamily: 'Pacifico',
    color: '#fff',
    fontSize: 40,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  middle: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  context: {
    fontFamily: 'ShadowsIntoLight',
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    padding: 80
  },
  loginButton: {
    width: '40%',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#E75480'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }


});
