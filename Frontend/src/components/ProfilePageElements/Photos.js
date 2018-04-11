import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

let images = [
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
   
]

let {width,height}= Dimensions.get('window');


class Photos extends Component {

  imageRender = () => 

      images.map((image,index) => {
      
      return(
     
      <View style={[{width:(width)/3},{height:(width)/3},
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

export default Photos;

const styles = StyleSheet.create({
  topcontainer: {
      flex: 1,
      backgroundColor: 'grey'
},
});
