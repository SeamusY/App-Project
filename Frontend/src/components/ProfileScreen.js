import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  View,
  ScrollView,
  } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Text, Icon } from 'native-base';
import Photos from './ProfilePageElements/Photos';
import Events from './ProfilePageElements/Events';
import HeaderStatic from './ProfilePageElements/HeaderStatic';
import Spots from './ProfilePageElements/Spots';

class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView>
      <HeaderStatic/>
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><Icon name="ios-camera" style={{color:"#ff8396"}} /><Text style={{color:"#000000"}}>Photos</Text></TabHeading>}>
            <Photos />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><Icon name="ios-bookmarks" style={{color:"#ff8396"}}/><Text style={{color:"#000000"}}>Events</Text></TabHeading>}>
            <Events />
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#FFF"}}><Icon name="ios-navigate" style={{color:"#ff8396"}}/><Text style={{color:"#000000"}}>Spots</Text></TabHeading>}>
            <Spots />
          </Tab>
        </Tabs>
      </Container>
      </ScrollView>
      

    );
  }
}

export default ProfileScreen;