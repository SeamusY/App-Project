import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, } from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Header style={{ backgroundColor: "#fff" }}>
            <Text style={{ justifyContent: "center", color: "#E75480" }}>Create Your Event</Text>
          </Header>
          <Card>
            <CardItem>
              <Icon active name="ios-sunny" style={{ color: "#E75480" }} />
              <Text>Choose A Date</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-time" style={{ color: "#E75480" }} />
              <Text>Choose A Time</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-map" style={{ color: "#E75480" }} />
              <Text>Pick A Location</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-paper" style={{ color: "#E75480", fontsize}} />
              <Text>Add Description</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>

            <CardItem>
              <Button rounded info>
                <Text>Light</Text>
              </Button>
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}