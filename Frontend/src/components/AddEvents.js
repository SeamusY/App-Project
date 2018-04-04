import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Button, View} from 'native-base';


export default class CardListExample extends Component {
  render() {
    return (

      <Container>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="ios-sunny" style={{ color: "#ff8396" }} />
              <Text>Choose A Date</Text>
              <Right>
                <Button transparent onPress={()=> alert('DatePicker API')}> 
                  <Icon name="arrow-forward" style={{ color: "#ff8396" }}/> 
                  </Button>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-time" style={{ color: "#ff8396" }} />
              <Text>Choose A Time</Text>
              <Right>
              <Button transparent onPress={()=> alert('TimePicker API')}> 
                  <Icon name="arrow-forward" style={{color: "#ff8396"}} /> 
                  </Button>
              </Right>
            </CardItem>

            <CardItem>
              <Icon active name="ios-navigate" style={{ color: "#ff8396" }} />
              <Text>Pick A Location</Text>
              <Right>
              <Button transparent onPress={()=> alert('Map API')}> 
                  <Icon name="arrow-forward" style={{color: "#ff8396"}} /> 
                  </Button>
              </Right>
            </CardItem>

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

      

          </Card>
        </Content>
      </Container>
    );
  }
}