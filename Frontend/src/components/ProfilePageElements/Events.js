import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import { Container, Content, Button, Icon, List, ListItem, Text, Thumbnail, Body, Right, Button } from 'native-base';
const datas = [
   'Lugard Road Shootout',
   'Lions Rock Sunset Shootout',
   'Victoria Habour shootout',
   'Tai Tam Rerservoir',
   'Central Urban shootout',
   'MongKok Night photography',
   'Lugard Road Shootout',
   'Lions Rock Sunset Shootout',
   'Victoria Habour shootout',
   'Tai Tam Rerservoir',
   'Central Urban shootout',
   'MongKok Night photography'
]

export default class Events extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/695935bde748f019008741abd712ba67/5B619350/t51.2885-19/s150x150/29095781_584119315300112_866345554152521728_n.jpg' }} />
              <Body>
                <Text>Ashley Grait</Text>
                <Text note>Shueng Wan Photography shootout</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/464b8db2133e3dac0b7dda9e93ee08c7/5B50E566/t51.2885-19/s150x150/12797989_244314302584259_967488229_a.jpg' }} />
              <Body>
                <Text>Cloe Ferrando</Text>
                <Text note>East Shinjuku shootout</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }} />
              <Body>
                <Text>Virgina Nigro</Text>
                <Text note>Lion's Rock Shootout</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/4a605eeb2f017ad33c1966b1f9bf5daf/5B716F60/t51.2885-19/s150x150/27878361_160231621301541_7126166951058997248_n.jpg' }} />
              <Body>
                <Text>Sophia Gaede</Text>
                <Text note>Deep Water Bay Sunset Shootout</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/97f64bc02a1c9769b6682542bcfe7fb8/5B6DC30F/t51.2885-19/s150x150/23101118_500379713668935_3755597520487579648_n.jpg' }} />
              <Body>
                <Text>Emilie Boreel</Text>
                <Text note >Central Night Photography</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/3b755db87e67ce845987bab35738e7fb/5B5CC2CA/t51.2885-19/s150x150/24838910_245316479335281_5980282591452856320_n.jpg' }} />
              <Body>
                <Text>Lexie Smith</Text>
                <Text note>Lugard Road, The Peak Shootout</Text>
              </Body>
              <Right>
                <Button transparent>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          
        </Content>
      </Container>
    );
  }
}

class Events extends Component {

  render() {
    return (
      

    <Text>Events</Text>

      
    );
  }
}

export default Events

const styles = StyleSheet.create({
    topcontainer: {
        flex: 1,
        backgroundColor: 'grey'
  },
  });



export default class SwipeableListExample extends Component {
    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        basic: true,
        listViewData: datas,
      };
    }
    deleteRow(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.state.listViewData];
      newData.splice(rowId, 1);
      this.setState({ listViewData: newData });
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
          <Container>
            <Content>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                  <ListItem>

                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }}  style={{paddingLeft: 60}}/>

                    <Text style= {{paddingRight: 50, paddingLeft: 50}}> {data} </Text>
                    
               <Icon  name="ios-bookmark" style={{flex: 1, color: "#E75480", justifyContent: 'flex-end'}}/>
               
                  </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle"  style={{paddingLeft: 30}}/>
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
          </Container>
        );
      }
    }
