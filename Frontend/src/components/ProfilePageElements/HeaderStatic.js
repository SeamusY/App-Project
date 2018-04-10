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

      <ImageBackground style={styles.headerBackground} source={require('../../../assets/Images/image6.jpg')}>

        <View style={styles.header}>

          <View style={styles.propicContainer}>
            <Image style={styles.propic} source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/4440751ad06d1a0aa40ccb9a92ef4dc1/5B39D952/t51.2885-19/s150x150/29087668_858655037626662_1753801491040174080_n.jpg' }} />

          </View>

          <Text style={styles.myname}>Hugo Chengo</Text>
          <Text style={styles.mydescribe}>Co-Founder of GoPhoter</Text>

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
