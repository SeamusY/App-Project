import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button} from 'native-base';
export default class Events extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#fff'}}>

        <Content>
          <List>
            <ListItem icon style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Left>
                <Icon name="ios-sunny" style={{color:'#ff8396'}} />
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Choose A Date</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
                
              </Body>
              <Right>
              <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Left>
                <Icon name="ios-time" style={{color:'#ff8396'}}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Choose A Time</Text>
                <Text note style={{ alignSelf: 'center' }}>16:20</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Left>
                <Icon name="ios-navigate" style={{color:'#ff8396'}}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Pick A Location</Text>
                <Text note style={{ alignSelf: 'center' }}>Deep Water Bay</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon style={{ paddingTop: 50, paddingBottom: 50 }}>
              <Left>
                <Icon name="ios-paper" style={{color:'#ff8396'}}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Add Desciption</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <Button full info style={{backgroundColor:"#ff8396"}}>
            <Text>Submit</Text>
          </Button> 

          </List>
        </Content>

       

      </Container>
      
     

    );
  }
}
