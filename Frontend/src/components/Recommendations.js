import React, { Component } from 'react';
import { ImageBackground, ScrollView, View, StyleSheet, TouchableHighlight, Modal} from 'react-native';
import { Content, Card, CardItem, Text } from 'native-base';

const RecommendArray = [
    {
        Photo: require('../../assets/Images/test.jpg'),
        Description: 'Braemar Hill'
    },
    {
        Photo: require('../../assets/Images/instagrampeir.jpg'),
        Description: 'Instagram Pier'
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Description: 'Hopewell Center Elavator'
    },
    {
        Photo: require('../../assets/Images/mansion.jpg'),
        Description: 'Montane Mansion'
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Description: 'Dragon\'s Back'
    },
    {
        Photo: require('../../assets/Images/mongkok.jpg'),
        Description: 'Mong Kok Streets'
    },
    {
        Photo: require('../../assets/Images/templestreet.jpg'),
        Description: 'Temple Street'
    },
    {
        Photo: require('../../assets/Images/central.jpg'),
        Description: 'Central District'
    },
    {
        Photo: require('../../assets/Images/chinacity.jpg'),
        Description: 'China City Building'
    },
    {
        Photo: require('../../assets/Images/image1.jpg'),
        Description: 'Jockey Club Innovation Tower'
    },
    {
        Photo: require('../../assets/Images/midlevel.jpg'),
        Description: 'Mid-Level Escalator'
    },
    {
        Photo: require('../../assets/Images/choihung.jpg'),
        Description: 'Choi Hung Estates'
    },
    {
        Photo: require('../../assets/Images/swimmingshed.jpg'),
        Description: 'Sai Wan Swimming Shed'},
    {
        Photo: require('../../assets/Images/replusebay.jpg'),
        Description: 'Repluse Bay'
    },
    {
        Photo: require('../../assets/Images/lugardroad.jpg'),
        Description: 'Lugard Road'
    }
    

]

export default class Recommendations extends Component {

    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

      render_Recommendation() {
        return RecommendArray.map(function(rec, i){
          return(
            <Card key = {i}>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={rec.Photo} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>{rec.Description}</Text>
                             
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
                    <View style={{marginTop: 22}}>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            button onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
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
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Hopewell Center Elavator</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/mansion.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Montane Mansion</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/test.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Dragon's Back</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/mongkok.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Mong Kok Streets</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/templestreet.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Temple Street</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/central.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Central District</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/chinacity.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>China City Building</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/choihung.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Choi Hung Estates</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/image1.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Jockey Club Innovation Tower</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/midlevel.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Mid-Level Escalator </Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/swimmingshed.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Sai Wan Swimming Shed</Text>
                                </View>
                            </ImageBackground>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true)}>
                            <ImageBackground source={require('../../assets/Images/replusebay.jpg')} style={styles.imagebackground}>
                                <View style={styles.middle}>
                                    <Text style={styles.context}>Repulse Bay</Text>
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