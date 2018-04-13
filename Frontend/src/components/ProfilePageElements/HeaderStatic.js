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
      <ImageBackground style={styles.headerBackground} source={require('../../../assets/Images/choihung.jpg')}>

        <View style={styles.header}>

          <View style={styles.propicContainer}>
            <Image style={styles.propic} source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/944372c1764fed4a4af10f77f485e5b0/5B5239F8/t51.2885-19/s150x150/29090546_2048000892105923_8489793387929534464_n.jpg' }} />

          </View>

          <Text style={styles.myname}>Hugo Cheng</Text>
          <Text style={styles.mydescribe}>21, Co-Founder of Go Photer</Text>

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
    alignSelf: 'stretch',
    borderRadius: 50,
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
