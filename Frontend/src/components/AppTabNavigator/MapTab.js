import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base';
import MapView from 'react-native-maps';

class MapTab extends Component {

  static navigatorOptions = {

    tabBarIcon: ({ tintColor }) => (
      <icon name="ios-map" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Text>Hello</Text>
        // <MapView
        //   style={{width: 50}}
        //   initialRegion={{
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        //   }}
        // />
    );
  }
}

export default MapTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});



