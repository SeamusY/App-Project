import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchScreen extends Component {
  render() {
    return (
     
        <Container style={{ backgroundColor: "#F2F2F2" }}>
          <Text style={styles.logo}>Go Photer</Text>
          <Header searchBar rounded style={{ backgroundColor: "#F2F2F2", paddingBottom: 90 }}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" style={{ color: "#E75480" }} />
            </Item>
            <Button transparent>
              <Text style={{ color: "#E75480" }}>Search</Text>
            </Button>
          </Header>
        </Container>
    
    );
  }
}

const styles = StyleSheet.create({

  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 60,
    color: '#ff8396',


  },
});

