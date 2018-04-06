import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
export default class Events extends Component {
  render() {
    return (

      <Container style={{ backgroundColor: '#fff', paddingTop: 70 }}>
        <Content>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="sunny" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Choose A Date</Text>
                <Text note style={styles.textnote}>10th May, Thursday</Text>
              </Body>
              <Right style={styles.right}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-time" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Choose A Time</Text>
                <Text note style={styles.textnote}>10th May, Thursday</Text>
              </Body>
              <Right style={styles.right}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-navigate" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Pick A Location</Text>
                <Text note style={styles.textnote}>Deep Water Bay</Text>
              </Body>
              <Right style={styles.right}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-paper" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Add Desciption</Text>
                <Text note style={styles.textnote}>10th May, Thursday</Text>
              </Body>
              <Right style={styles.right}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Button full info style={{ backgroundColor: "#ff8396" }}>
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    borderBottomWidth: 0
  },

  icon: {
    color: '#ff8396'
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  },
  textnote: {
    alignSelf: 'center'
  },
  right: {
    borderBottomWidth: 0
  }
});
