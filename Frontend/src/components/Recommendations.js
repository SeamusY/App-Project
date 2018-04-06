import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Recommendations extends Component {
    render() {
        return (
       
            <Container>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../../assets/Images/image1.jpg')} style={{ height: 200, flex: 1 }} />
                        </CardItem>
                       
                       
                    </Card>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../../assets/Images/image1.jpg')} style={{ height: 200, flex: 1 }} />
                        </CardItem>
                       
                       
                    </Card>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../../assets/Images/image1.jpg')} style={{ height: 200, flex: 1 }} />
                        </CardItem>
                       
                    </Card>
                    <Card>
                        <CardItem cardBody>
                            <Image source={require('../../assets/Images/image1.jpg')} style={{ height: 200, flex: 1 }} />
                        </CardItem>
                      
                       
                    </Card>
                </Content>
            </Container>
         
         
        );
    }
}