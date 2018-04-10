import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, View, StyleSheet, Modal } from 'react-native';
import { Content, Card, CardItem, Text, Left, Right, Thumbnail, Body, Icon, Button } from 'native-base';

const RecommendArray = [
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Braemar Hill',
        Photographer: 'Steve Devish'

    },
    {
        Photo: require('../../assets/Images/instagrampeir.jpg'),
        Location: 'Instagram Pier',
        Photographer: 'Hugo Cheng'
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Hopewell Center Elavator',
        Photographer: 'Gordan Chung'
    },
    {
        Photo: require('../../assets/Images/mansion.jpg'),
        Location: 'Montane Mansion',
        Photographer: 'Thomas Lee'
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Dragon\'s Back',
        Photographer: 'Erik Hendenfalk'
    },
    {
        Photo: require('../../assets/Images/mongkok.jpg'),
        Location: 'Mong Kok Streets',
        Photographer: 'Rex Wong'

    },
    {
        Photo: require('../../assets/Images/templestreet.jpg'),
        Location: 'Temple Street',
        Photographer: 'Tim Ching'
    },
    {
        Photo: require('../../assets/Images/central.jpg'),
        Location: 'Central District',
        Photographer: 'Hugo Cheng'
    },
    {
        Photo: require('../../assets/Images/chinacity.jpg'),
        Location: 'China City Building',
        Photographer: 'Jessica Chen'
    },
    {
        Photo: require('../../assets/Images/image1.jpg'),
        Location: 'Jockey Club Innovation Tower',
        Photographer: 'Rex Wong'
    },
    {
        Photo: require('../../assets/Images/midlevel.jpg'),
        Location: 'Mid-Level Escalator',
        Photographer: 'Hugo Cheng'

    },
    {
        Photo: require('../../assets/Images/choihung.jpg'),
        Location: 'Choi Hung Estates',
        Photographer: 'Hugo Cheng'
    },
    {
        Photo: require('../../assets/Images/swimmingshed.jpg'),
        Location: 'Sai Wan Swimming Shed',
        Photographer: 'Alistair Tam'
    },
    {
        Photo: require('../../assets/Images/replusebay.jpg'),
        Location: 'Repluse Bay',
        Photographer: 'Denise Cheng'
    },
    {
        Photo: require('../../assets/Images/lugardroad.jpg'),
        Location: 'Lugard Road',
        Photographer: 'Erik Hendenfalk'
    }
]





export default class Recommendations extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render_Recommendation() {
        return RecommendArray.map(function (rec, i) {
            return (
                <Card key={i}>
                    <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                        <ImageBackground source={rec.Photo} style={styles.imagebackground}>
                            <View style={styles.middle}>
                                <Text style={styles.context}>{rec.Location}</Text>

                            </View>
                        </ImageBackground>
                    </CardItem>
                </Card>
            );
        }, this);
    }


    render() {
        return (
            <View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >

                    <Card>
                        <CardItem cardBody>
                            <Image style={styles.modalimage} source={rec.Photo} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text style={styles.modaltext}>{rec.Location}</Text>
                                    <Text note>{rec.Photographer}</Text>
                                </Body>
                            </Left>
                            <Right>

                                <Text style={styles.direction}>Directions</Text>
                                <Text note>2.6K</Text>
                            </Right>

                        </CardItem>
                    </Card>


                    <Button style={styles.modalbutton} full info onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Icon name="arrow-back" />
                        <Text>Recommendations</Text>
                    </Button>

                </Modal>

                <ScrollView style={{ flexGrow: 1 }}>

                    <Content style={{ flex: 1 }}>

                        {this.render_Recommendation()}


                    </Content>
                    {/* </Container> */}
                </ScrollView>
            </View>


        );
    }
}


const styles = StyleSheet.create({
    context: {
        fontFamily: 'Pacifico',
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        padding: 80
    },
    middle: {

        alignItems: 'center',
        justifyContent: 'center'
    },

    imagebackground: {
        height: 200,
        flex: 1
    },
    modalimage: {
        height: 500,
        flex: 1
    },
    modaltext: {
        fontSize: 20
    },
    direction: {
        fontSize: 20,
        color: "#ff8396"
    },
    modalbutton: {
        backgroundColor: '#ff8396',
        marginBottom: 16
    }

});

{/* <Card>
                        <CardItem cardBody button button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Braemar Hill</Text>
                             
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/instagrampeir.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Instagram Pier</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/04697c22c18a6b9911e1789414581bf4/5B63C1A3/t51.2885-19/s150x150/20479307_259226047906088_8664596465227661312_a.jpg' }} />
                                <Body>
                                    <Text style={styles.modaltext}>Braemar Hill</Text>
                                    <Text note> By Ashley Grait</Text>
                                </Body>
                            </Left>
                            <Right>

                                <Text style={styles.direction}>Directions</Text>
                                <Text note>2.6K</Text>
                            </Right>

                        </CardItem>
                    </Card>


                    <Button style={styles.modalbutton} full info onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Icon name="arrow-back" />
                        <Text>Recommendations</Text>
                    </Button>

                </Modal>

                <ScrollView style={{ flexGrow: 1 }}>

                    <Content style={{ flex: 1 }}>
                        <Card>
                            <CardItem cardBody button button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Braemar Hill</Text>

                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/instagrampeir.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Instagram Pier</Text>
                                        <Text note>10th May, Thursday</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Hopewell Center Elavator</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/mansion.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Montane Mansion</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody button onPress={() => this.setModalVisible(true)}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Dragon's Back</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/lugardroad.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Lugard Road</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card> */}
