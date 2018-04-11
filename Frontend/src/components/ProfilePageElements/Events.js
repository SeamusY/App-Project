import React, { Component } from 'react';
// import { Container, Content, List, ListItem, Thumbnail, Text, Body, Right, Button } from 'native-base';
import { Image, StyleSheet, Modal } from 'react-native';
import { View, DeckSwiper, Container, Content, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, List, ListItem, Icon} from 'native-base';

export default class Events extends Component {

  state = {
    modalVisible: false,
};

setModalVisible(visible) {
    this.setState({ modalVisible: visible });
}

  render() {
    return (
      <Container>
                 <Content>
                  <View>
    
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                    >
                        <View>
                        <Text style={styles.logo}>Go Photer</Text>


                            <List>
                                <ListItem noBorder>
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/695935bde748f019008741abd712ba67/5B619350/t51.2885-19/s150x150/29095781_584119315300112_866345554152521728_n.jpg' }} />
                                    <Body>
                                        <Text>Ashley Grait</Text>
                                        <Text note>Shueng Wan Photography shootout</Text>
                                    </Body>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem noBorder>
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/464b8db2133e3dac0b7dda9e93ee08c7/5B50E566/t51.2885-19/s150x150/12797989_244314302584259_967488229_a.jpg' }} />
                                    <Body>
                                        <Text>Cloe Ferrando</Text>
                                        <Text note>East Shinjuku shootout</Text>
                                    </Body>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem noBorder>
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }} />
                                    <Body>
                                        <Text>Virgina Nigro</Text>
                                        <Text note>Lion's Rock Shootout</Text>
                                    </Body>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem noBorder>
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/4a605eeb2f017ad33c1966b1f9bf5daf/5B716F60/t51.2885-19/s150x150/27878361_160231621301541_7126166951058997248_n.jpg' }} />
                                    <Body>
                                        <Text>Sophia Gaede</Text>
                                        <Text note>Deep Water Bay Sunset Shootout</Text>
                                    </Body>

                                </ListItem>
                            </List>





                    </View>

                    <View style={{flexDirection: "row", alignSelf: "center", paddingTop: 30, paddingBottom: 30}}>

                        <Button block danger style={{width: 150}}>
                        <Text>Yes</Text>
                        </Button>

                        <Button block info style={{width: 150}}>
                        <Text>No</Text>
                        </Button>

                    </View>
             
                    <Button style={styles.modalbutton} full info onPress={() => {this.setModalVisible(false)}}>
                        <Icon name="arrow-back" />
                        <Text>My Profile</Text>
                    </Button>
      
                        
                    </Modal>

          <List>
            <ListItem>
              <Thumbnail  source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/695935bde748f019008741abd712ba67/5B619350/t51.2885-19/s150x150/29095781_584119315300112_866345554152521728_n.jpg' }} />
              <Body>
                <Text>Ashley Grait</Text>
                <Text note>Shueng Wan Photography shootout</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => this.setModalVisible(true)}>
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
                <Button transparent onPress={() => this.setModalVisible(true)}>
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
                <Button transparent onPress={() => this.setModalVisible(true)}>
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
                <Button transparent onPress={() => this.setModalVisible(true)}>
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
                <Button transparent onPress={() => this.setModalVisible(true)}>
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
                <Button transparent onPress={() => this.setModalVisible(true)}>
                <Text note style={{color: '#ff8396'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          
       
       </View>
       </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  modalbutton: {
      backgroundColor: '#ff8396',
      marginBottom: 0
  },
 
  logo: {
    textAlign: 'center',
    fontFamily: 'Pacifico',
    fontSize: 60,
    color: '#ff8396',
    paddingTop: 30,
    paddingBottom: 30,
   

  },
  
});