import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
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

  constructor () {
    super()
    this.state = {
      imageSource: null
    }
  }
  selectPhoto () {
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
       <ScrollView>
        <View style={styles.container}>
        <Image style={style.image}
        source={this.state.imageSource != null }
        />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Select</Text>
          </TouchableOpacity>

        </View>
       </ScrollView>
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
    backgroundColor: '#fff'
  },
  text: {
    color: 'pink',
    fontSize: 30,
    textAlign: 'center'
  }
});



