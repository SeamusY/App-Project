import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="ios-sunny" style={{color:"#E75480"}}/>
              <Text>Choose A Date</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem>
              <Icon active name="ios-time" style={{color:"#E75480"}}/>
              <Text>Choose A Time</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem>
              <Icon active name="ios-map" style={{color:"#E75480"}}/>
              <Text>Choose A Location</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>

           <Card>
            <CardItem>
              <Icon active name="ios-paper" style={{color:"#E75480"}}/>
              <Text>Add Some Description</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}