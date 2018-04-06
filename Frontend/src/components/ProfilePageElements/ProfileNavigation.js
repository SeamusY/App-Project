import React, { Component } from 'react';

import {
    StyleSheet
  } from 'react-native';

import { Container, Header, Tab, Tabs, TabHeading, Text } from 'native-base';
import Photos from './Photos';
import Events from './Events';


class ProfileNavigation extends Component {

  render() {
    return (

        <Container>
          <Tabs>
            <Tab heading={<TabHeading><Text>Photos</Text></TabHeading>}>
              <Photos />
            </Tab>
            <Tab heading={<TabHeading><Text>Events</Text></TabHeading>}>
              <Events />
            </Tab>
          </Tabs>
        </Container>

    );
  }
}

export default ProfileNavigation;

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    backgroundColor: 'grey'
  },
});

