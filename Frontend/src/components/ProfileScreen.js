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
      

    );
  }
}

export default ProfileScreen;