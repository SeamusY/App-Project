import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { Icon } from 'native-base';

let images = [
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg'),
  require('../../DSC06107.jpg')

]

let {width,height}= Dimensions.get('window');


class ProfileScreen extends Component {

  imageRender = () => 

      images.map((image,index) => {
      
      return(
      
      <View key={index} style={[{width:(width)/3},{height:(width)/3},
        index % 3 !== 0 ? { paddingLeft:2 } : { paddingLeft:0 }
      ]}>
      <Image style={{flex:1, width:undefined, height:undefined}}
      source={image}/>

      </View>
      
    )}
)
  render() {
    return (
      <View style = {{flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.imageRender()}
      </View>
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



