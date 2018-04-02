import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Alert
} from 'react-native';
import { Button } from 'native-base';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class LoginScreen extends Component {
  componentDidMount() {
    this._setupGoogleSignin();
  }
  render() {
    return (
      <ImageBackground source={require('../../DSC06107.jpg')} style={styles.backgroundImage}>
        <View style={styles.top}>
          <Text style={styles.header}>GO Photer</Text>
        </View>
        <View style={styles.middle}>
          <Text style={styles.context}>New way to learn photography</Text>
        </View>
        <GoogleSigninButton
          style={{ width: 48, height: 48, alignSelf:'center'}}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => this._signIn()} />
      </ImageBackground >
    );
  }
  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '125323859717-i7rjij5e52nir68eesn051gnjo86tkfp.apps.googleusercontent.com',
        offlineAccess: false
      });
      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({ user });
    }
    catch (err) {
      console.log("Play services error", err.code, err.message);
    }
  }
  _signIn() {
    alert("This Ran");
    GoogleSignin.signIn().then((user) => {
      console.log(user);
    })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
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
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#E75480'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
});
