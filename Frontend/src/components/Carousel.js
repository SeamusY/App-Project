import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
    {
        text: 'Ashley Giralt',
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
    render() {
        return (
            <Container>

                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 6 }}>
                                <CardItem cardBody>
                                    <Image style={{ height: 500, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/04697c22c18a6b9911e1789414581bf4/5B63C1A3/t51.2885-19/s150x150/20479307_259226047906088_8664596465227661312_a.jpg' }}/>
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>{item.description}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <Button full info style={{backgroundColor: '#ff8396'}}>
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
