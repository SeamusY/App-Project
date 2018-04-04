import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button} from 'native-base';
export default class Events extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#fff'}}>

        <Content>
<<<<<<< HEAD
          <Card>
            <CardItem>
              <Icon active name="ios-sunny" style={{ color: "#ff8396" }} />
              <Text>Choose A Date</Text>
              <Right>
                <Button transparent onPress={()=> alert('DatePicker API')}> 
                  <Icon name="arrow-forward" style={{ color: "#ff8396" }}/> 
                  </Button>
=======
          <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-sunny" style={{color:'#ff8396'}} />
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Choose A Date</Text>
                <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
                
              </Body>
              <Right>
              <Icon name="arrow-forward" />
>>>>>>> 62f6ed2cdc27dd0aabac48c1b815e513ccf6a2bf
              </Right>
            </ListItem>

<<<<<<< HEAD
            <CardItem>
              <Icon active name="ios-time" style={{ color: "#ff8396" }} />
              <Text>Choose A Time</Text>
              <Right>
              <Button transparent onPress={()=> alert('TimePicker API')}> 
                  <Icon name="arrow-forward" style={{color: "#ff8396"}} /> 
                  </Button>
=======
            <ListItem icon>
              <Left>
                <Icon name="ios-time" style={{color:'#ff8396'}}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Choose A Time</Text>
                <Text note style={{ alignSelf: 'center' }}>16:20</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
>>>>>>> 62f6ed2cdc27dd0aabac48c1b815e513ccf6a2bf
              </Right>
            </ListItem>

<<<<<<< HEAD
            <CardItem>
              <Icon active name="ios-navigate" style={{ color: "#ff8396" }} />
              <Text>Pick A Location</Text>
              <Right>
              <Button transparent onPress={()=> alert('Map API')}> 
                  <Icon name="arrow-forward" style={{color: "#ff8396"}} /> 
                  </Button>
=======
            <ListItem icon>
              <Left>
                <Icon name="ios-navigate" style={{color:'#ff8396'}}/>
              </Left>
              <Body>
                <Text style={{ alignSelf: 'center' }}>Pick A Location</Text>
                <Text note style={{ alignSelf: 'center' }}>Deep Water Bay</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
>>>>>>> 62f6ed2cdc27dd0aabac48c1b815e513ccf6a2bf
              </Right>
            </ListItem>

<<<<<<< HEAD
            <CardItem>
              <Icon active name="ios-paper" style={{ color: "#ff8396",}} />
              <Text>Add Description</Text>
              <Right>
              <Button transparent> 
                  <Icon name="arrow-forward" style={{color: "#ff8396"}} /> 
                  </Button>
              </Right>
            </CardItem>
    
         
              <Button full info style={{ backgroundColor: "#ff8396",}} onPress={() =>alert('Event Is Created!')}>
                <Text>Submit</Text>
              </Button>
=======
            <ListItem icon>
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
>>>>>>> 62f6ed2cdc27dd0aabac48c1b815e513ccf6a2bf

            <Button full info style={{backgroundColor:"#ff8396"}}>
            <Text>Submit</Text>
          </Button> 

          </List>
        </Content>

       

      </Container>
      
     

    );
  }
}
