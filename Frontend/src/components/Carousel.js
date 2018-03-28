import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
    {
        text: 'Cnetral Peir Shootout',
        name: 'One',
        image: require('../../assets/Images/image1.jpg'),
    },
    {
        text: 'CausewayBay Shootout',
        name: 'One',
        image: require('../../assets/Images/image2.jpg'),
    },
    {
        text: 'Central District Shootout',
        name: 'One',
        image: require('../../assets/Images/image3.jpg'),
    },

];
export default class Carousel extends Component {
    render() {
        return (
            <ScrollView>
                <Container>
                    <View>
                        <DeckSwiper
                            ref={(c) => this._deckSwiper = c}
                            dataSource={cards}
                            renderEmpty={() =>
                                <View style={{ alignSelf: "center" }}>
                                    <Text>Over</Text>
                                </View>
                            }
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/4440751ad06d1a0aa40ccb9a92ef4dc1/5B39D952/t51.2885-19/s150x150/29087668_858655037626662_1753801491040174080_n.jpg' }} />
                                            <Body>
                                                <Text>{item.text}</Text>
                                                <Text note>Thursday 5:00pm</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                    </CardItem>
                                    <CardItem>
                                        <Button rounded style={{backgroundColor:'#a9a9a9', alignSelf:'center'}}>
                                            <Text>More Info</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            }
                        />
                    </View>

                    <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 450, left: 0, right: 0, justifyContent: 'space-between', padding: 30 }}>
                        <Button rounded iconLeft onPress={() => this._deckSwiper._root.swipeLeft()} style={{ backgroundColor: '#E75480',}}>
                            <Icon name="arrow-back" />
                         
                        </Button>
                        <Button rounded iconRight onPress={() => this._deckSwiper._root.swipeRight()} style={{ backgroundColor: '#E75480', }}>
                         
                            <Icon name="arrow-forward" />
                        </Button>
                    </View>
                </Container>
                
            </ScrollView>
        );
    }
}

