import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,

} from 'react-native';
import { Icon, Button, Container } from 'native-base';
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
      data: null,
      loading: false
    }
  }
  selectPhoto() {
    this.setState({ loading: false })
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
          data: response
        });
      }
    });
  }

  uploadPhoto() {
    if (this.state.data != null) {
      this.setState({ loading: true });
      RNFetchBlob.fetch('POST', `http://10.0.2.2:3000/photos/${1}`, {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
          { name: 'image', filename: this.state.data.fileName, type: this.state.data.type, data: this.state.data.data }
        ]).then((resp) => {
          this.setState({
            loading: false,
            imageSource: null,
            data: null
          })
        }).catch((err) => {
          // ...
        })
    }
  }

  renderUpload() {
    if (this.state.loading === false) {
      return (
        <Button style={styles.button} full info onPress={() => this.uploadPhoto()}>
          <Text style={styles.text}>Upload</Text>
        </Button>)
    }
    return <ActivityIndicator size="large" color="#00ff00" />;
  }
  render() {
    return (
      <ScrollView>

        <Text style={styles.logo}>Go Photer</Text>
        <Container>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.selectPhoto()}>
              <Image style={styles.image}
                source={this.state.imageSource == null ? require('../../../assets/Images/upload.png') : this.state.imageSource}
              />
            </TouchableOpacity>

            {this.renderUpload()}

          </View>
        </Container>
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
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: "#ff8396",
    marginBottom: 165
    
  },

  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 60,
    color: '#ff8396',
    backgroundColor: '#FFF'
   

  },

  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: "#fff"
  },

  image: {
    width: 170,
    height: 170,
    marginBottom: 170,
    alignSelf: 'center'
 
    
    
  }
});



