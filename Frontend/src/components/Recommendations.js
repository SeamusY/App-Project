import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, View, StyleSheet, Modal} from 'react-native';
import { Content, Card, CardItem, Text, Left, Right, Body, Thumbnail, Icon, Button} from 'native-base';

const RecommendArray = [
    {
        Photo: require('../../assets/Images/test.jpg'),
        Description: 'Braemar Hill',
        Photographer: 'abc'
    },
    {
        Photo: require('../../assets/Images/instagrampeir.jpg'),
        Description: 'Instagram Pier',
        Photographer: 'def'
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
        Objnumber: 0
      };
    
      setModalVisible(visible, i) {
        this.setState({modalVisible: visible});
        this.state.Objnumber = i
      }

      render_Recommendation() {
        return RecommendArray.map(function(rec, i){
          return(
            <Card key = {i}>
                        <CardItem cardBody button onPress={()=>this.setModalVisible(true, i)}>
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

                    <Card>

                        <CardItem cardBody>
                            <Image style={styles.modalimage} source={RecommendArray[this.state.Objnumber].Photo} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                
                                <Body>
                                    <Text style={styles.modaltext}>{RecommendArray[this.state.Objnumber].Description}</Text>
                                    <Text note> {RecommendArray[this.state.Objnumber].Photographer}</Text>
                                </Body>
                            </Left>
                            <Right>

                                <Text style={styles.direction}>Directions</Text>
                                <Text note>2.6K</Text>
                            </Right>

                        </CardItem>
                    </Card>


                    <Button style={styles.modalbutton} full info onPress={() => {
                        this.setModalVisible(false, 0);
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
