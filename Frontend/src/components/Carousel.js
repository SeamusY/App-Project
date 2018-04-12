import React, { Component } from 'react';
import { Image, StyleSheet, Modal } from 'react-native';
import { View, DeckSwiper, Container, Card, CardItem, Thumbnail, Text, Left, Right, Body, Button, List, ListItem, Icon} from 'native-base';
const cards = [
    {
        text: 'Steve Divish',
        description: 'Central Long Exposure',
        name: 'One',
        image: require('../../assets/Images/image4.jpg'),

    },
    {
        text: 'Virginia Nirgo',
        description: 'East Shinjuku Shootout ',
        name: 'Two',
        image: require('../../assets/Images/image5.jpg'),
    },
    {
        text: 'Cloe Ferrnando',
        description: 'Central Urban Shootout',
        name: 'Three',
        image: require('../../assets/Images/image6.jpg'),
    },
    {
        text: 'Jonathan Doku',
        description: 'Victoria Habour Shootout',
        name: 'Four',
        image: require('../../assets/Images/image7.jpg'),
    },
    {
        text: 'Tommy Worden',
        description: 'High West Peak Shootout',
        name: 'Five',
        image: require('../../assets/Images/image8.jpg'),
    },
    {
        text: 'Emily Boreel',
        description: 'Roppongi Hills, Tokyo',
        name: 'Six',
        image: require('../../assets/Images/image9.jpg'),
    },

];
export default class DeckSwiperExample extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Container>

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
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/78e1ab9d6d35eebdd2cde891e3a03cef/5B4FBC70/t51.2885-19/s150x150/26865485_161280891185375_4097005467279032320_n.jpg' }} />
                                    <Body>
                                        <Text>Erik Hendenfalk</Text>
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
                                    <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/a3e2f173acc623c0d281761abf692174/5B523277/t51.2885-19/s150x150/14031651_316214658727036_306004320_a.jpg' }} />
                                    <Body>
                                        <Text>Alistair Lam</Text>
                                        <Text note>Mong Kok Shooutout</Text>
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
                        <Text>Events</Text>
                    </Button>
      
                        
                    </Modal>

                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 6 }}>
                                <CardItem cardBody>
                                    <Image style={{ height: 500, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg3-1.fna.fbcdn.net/vp/ca75e7c9e0471c5ca6a6d1182670e19d/5B5CD445/t51.2885-19/s150x150/14262883_301061306925458_1843307609_a.jpg' }} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>{item.description}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <Button full info style={{ backgroundColor: '#ff8396', marginTop: 5 }} onPress={() => this.setModalVisible(true)}>
                                    <Text>Info</Text>
                                </Button>
                            </Card>
                        }
                    />
                </View>
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
