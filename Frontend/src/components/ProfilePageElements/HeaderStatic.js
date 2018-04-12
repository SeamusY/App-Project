import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';


class HeaderStatic extends Component {

  render() {
    return (
      <ImageBackground style={styles.headerBackground} source={require('../../../assets/Images/background.jpg')}>

        <View style={styles.header}>

          <View style={styles.propicContainer}>
            <Image style={styles.propic} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/1d0408e3d5deae5556092bea73008978/5B62BE99/t51.2885-19/s150x150/30076615_711630672560721_2236927587479715840_n.jpg' }} />

          </View>

          <Text style={styles.myname}>Elenibr</Text>
          <Text style={styles.mydescribe}>21, Based in Rome, Italy</Text>

        </View>

      </ImageBackground>

    );
  }
}

export default HeaderStatic;

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    height: 250
  },
  header: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  propicContainer: {
    marginTop: 60,
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
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  mydescribe: {
    fontSize: 15,
    color: '#0394c0',
    fontWeight: '300'
  }
});
