import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchScreen extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor:"#F2F2F2"}}>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="Search" />
            <Icon name="ios-people"  style={{color: "#E75480"}}/>
          </Item>
          <Button transparent>
            <Text style={{color: "#E75480"}}>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}