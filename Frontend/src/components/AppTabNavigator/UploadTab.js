import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select a photo',
  takePhotoButtonTitle: 'Take a photo',
  chooseFromLibraryButtonTitle: 'Choose from gallery',
  qality: 1

};
class UploadTab extends Component {

  constructor() {
    super()
    this.state = {
      imageSource: null
    }
  }
  selectPhoto() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source
        });
      }
    });
  }
  render() {
    return (
      //  <ScrollView>
      <View style={styles.container}>
        {/* <Image style={styles.image}
        source={this.state.imageSource == null ? require('../../../assets/Images/upload.png'): this.state.imageSource}
        /> */}
        <TouchableOpacity onPress={() => this.selectPhoto()}>
          <Image style={styles.image}
            source={require('../../../assets/Images/upload.png')} />
          {/* <Text style={styles.text}>Select</Text> */}
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.text}>Upload</Text>
        </TouchableOpacity>


      </View>
      //  </ScrollView>
    );
  }
}

export default UploadTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#fff',
    marginTop: 15
  },
  text: {
    color: 'pink',
    fontSize: 30,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 50
  }
});



