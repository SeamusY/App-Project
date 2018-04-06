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
    require('../../../assets/Images/image4.jpg'),
    require('../../../assets/Images/image5.jpg'),
    require('../../../assets/Images/image6.jpg'),
    require('../../../assets/Images/image7.jpg'),
    require('../../../assets/Images/image8.jpg'),
    require('../../../assets/Images/image9.jpg'),
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
    require('../../../assets/Images/image4.jpg'),
    require('../../../assets/Images/image5.jpg'),
    require('../../../assets/Images/image6.jpg'),
    require('../../../assets/Images/image7.jpg'),
    require('../../../assets/Images/image8.jpg'),
    require('../../../assets/Images/image9.jpg'),
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
    require('../../../assets/Images/image4.jpg'),
    require('../../../assets/Images/image5.jpg'),
    require('../../../assets/Images/image6.jpg'),
    require('../../../assets/Images/image7.jpg'),
    require('../../../assets/Images/image8.jpg'),
    require('../../../assets/Images/image9.jpg'),
    require('../../../assets/Images/image1.jpg'),
    require('../../../assets/Images/image2.jpg'),
    require('../../../assets/Images/image3.jpg'),
    require('../../../assets/Images/image4.jpg'),
    require('../../../assets/Images/image5.jpg'),
    require('../../../assets/Images/image6.jpg'),
    require('../../../assets/Images/image7.jpg'),
    require('../../../assets/Images/image8.jpg'),
    require('../../../assets/Images/image9.jpg'),
   
]

let {width,height}= Dimensions.get('window');


class Photos extends Component {

  imageRender = () => 

      images.map((image,index) => {
      
      return(
     
      <View style={[{width:(width)/3},{height:(width)/3},
        index % 3 !== 0 ? { paddingLeft:2 } : { paddingTop:2 } 
      ]}>
      <Image style={{flex:1, width:undefined, height:undefined}}
      source={image}/>

      </View>
    
      
    )}
)
  render() {
    return (
      <ScrollView style={{ flexGrow: 1 }}>
      <View style = {{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
        {this.imageRender()}
      </View>
      </ScrollView>

      
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
