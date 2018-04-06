import React, { Component } from 'react';
<<<<<<< HEAD
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Icon } from 'native-base';

class ProfileScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
=======

import {
  StyleSheet,
  View,
  ScrollView,
  } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Text, Icon } from 'native-base';
import Photos from './ProfilePageElements/Photos';
import Events from './ProfilePageElements/Events';
import HeaderStatic from './ProfilePageElements/HeaderStatic';

class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView>
      <HeaderStatic/>
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><Icon name="camera" style={{color:"#E75480"}} /><Text style={{color:"#000000"}}>Photos</Text></TabHeading>}>
            <Photos />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><Icon name="bookmarks" style={{color:"#E75480"}}/><Text style={{color:"#000000"}}>Events</Text></TabHeading>}>
            <Events />
          </Tab>
        </Tabs>
      </Container>
      </ScrollView>
      

>>>>>>> bd58374d24534cc3050cdebfbd505784c8ad0ff9
    );
  }
}

export default ProfileScreen;
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      

  },
});



=======
>>>>>>> bd58374d24534cc3050cdebfbd505784c8ad0ff9
