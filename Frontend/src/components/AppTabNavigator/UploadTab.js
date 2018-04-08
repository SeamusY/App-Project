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
import RNFetchBlob from 'react-native-fetch-blob';

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
      imageSource: null,
      data: null
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
          imageSource: source,
          data: response.data
        });
      }
    });
  }

  uploadPhoto() {
    RNFetchBlob.fetch('POST', 'http://locahost3000/upload', {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data: this.state.data }
      ]).then((resp) => {
        // ...
      }).catch((err) => {
        // ...
      })
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

        <TouchableOpacity onPress={() => this.uploadPhoto()}>
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



