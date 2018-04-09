import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, StyleSheet, Container, Button } from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';
import PopupDialog from 'react-native-popup-dialog';


export default class Recommendations extends Component {

    render() {
        return (
            <View>
                {/* <Modal 
            style={[styles.modal, styles.modal2]} 
            backdrop={true}  position={"top"} ref={"modal2"} 
            backdropPressToClose={true}
            isOpen={this.state.isOpen}
            onOpened={() => this.setState({isOpen: true})}
            onClosed={() => this.setState({isOpen: false})}>
                <Text style={styles.text}>Modal on top</Text>
                <Button onPress={() => this.setState({isOpen: !this.state.isOpen},
               )} style={styles.btn}>Close ({this.state.isOpen ? "true" : "false"})</Button>
            </Modal> */}




                <ScrollView style={{ flexGrow: 1 }}>
                    {/* <Container> */}

                    <Content style={{ flex: 1 }}>
                        <Card>
                            <CardItem cardBody button onPress={() => navigation.navigate('Profile')}>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>High West Peak</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>

                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Instagram Pier</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Hopewell Center Elavator</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Montane Mansion</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Dragon's Back</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Mong Kok Streets</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Temple Street</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Central District</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Lugard Road</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Choi Hung Estates</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Jockey Club Innovation Tower</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Mid-Level Escalator </Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Sai Wan Swimming Shed</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>Cultural Centre Corridors</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem cardBody>
                                <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                    <View style={styles.middle}>
                                        <Text style={styles.context}>China Hong Kong City Building</Text>
                                    </View>
                                </ImageBackground>
                            </CardItem>
                        </Card>


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

    modal2: {
        position: 'relative',
        marginTop: 100,
        height: 300,
        width: 300
    },

    text: {
        color: "black",
        fontSize: 22
    }

});