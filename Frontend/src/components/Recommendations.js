import React, { Component } from 'react';
import { ImageBackground, Image, ScrollView, View, StyleSheet, Modal } from 'react-native';
import { Content, Card, CardItem, Text, Left, Right, Body, Thumbnail, Icon, Button } from 'native-base';

const RecommendArray = [
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Braemar Hill',
        Photographer: 'By Ammr Eltilib',
        Distance: '2.6K',
        Description: 'To photograph the splendid night scene of Hong Kong, Braemar Hill is a nice place where you can take nightscape photos, remember to bring a tripod.'
    },
    {
        Photo: require('../../assets/Images/instagrampeir.jpg'),
        Location: 'Instagram Pier',
        Photographer: 'By Hugo Cheng',
        Distance: '1.5K',
        Description: 'If you want to take a break off the busy city, Instagram Pier is a great place to chill out after school or work. You will meet a lot of instagrammers there, best to shoot during golden hour'
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Hopewell Center Elavator',
        Photographer: 'By Gordan Chung',
        Distance: '7.6K',
        Description: 'The elvator will take you from the 17th floor to the 64th floor, you will be able to get some awesome footage of the Hong Kong Island, best to bring a wide angle lens'
    },
    {
        Photo: require('../../assets/Images/mansion.jpg'),
        Location: 'Montane Mansion',
        Photographer: 'By Thomas Lee',
        Distance: '4.6K',
        Description: 'Also known as the monster buidling, one of the most iconic photography shootout spot in Hong kong, best to shoot during night. '
    },
    {
        Photo: require('../../assets/Images/test.jpg'),
        Location: 'Dragon\'s Back',
        Photographer: 'By Erik Hendenfalk',
        Distance: '8.6K',
        Description: 'A relatively easy hike, the view is sensational on top of the hill, seriosuly bring a drone!'

    },
    {
        Photo: require('../../assets/Images/mongkok.jpg'),
        Location: 'Mong Kok Streets',
        Photographer: 'By Rex Wong',
        Distance: '3.6K',
        Description: 'The heart of urban streets, you will able to find a lot of local culture and one of the best place for street photography'

    },
    {
        Photo: require('../../assets/Images/templestreets.jpg'),
        Location: 'Temple Street',
        Photographer: 'By Alistair Lam',
        Distance: '1.6K',
        Description: 'There are a couple of rooftops,carpark opposite the temple street allow you to capture some beautiful street photography'
    },
    {
        Photo: require('../../assets/Images/central.jpg'),
        Location: 'Central District',
        Photographer: 'By Hugo Cheng',
        Distance: '2.6K',
        Description:'There are so many places that you can shoot in Central District, we highly recommend you to go to Tamar Park during sunset and night hour'
    },
    {
        Photo: require('../../assets/Images/chinacitybuilding.jpg'),
        Location: 'China City Building',
        Photographer: 'By Jessica Chen',
        Distance: '1.8K',
        Description: 'If you are into symmetrical photography, this is a place where you can go to point your camera upwards and capture that majestic moment '
    },
    {
        Photo: require('../../assets/Images/image1.jpg'),
        Location: 'Jockey Club Innovation Tower',
        Photographer: 'By Rex Wong',
        Distance: '3.2K',
        Description: 'A great place for interior and portriat photography, the architecture of the buidling is simply amazing. '
    },
    {
        Photo: require('../../assets/Images/midlevel.jpg'),
        Location: 'Mid-Level Escalator',
        Photographer: 'By Hugo Cheng',
        Distance: '5.6K',
        Description: 'Head up to the Mid-Levels Escalators and shoot your vertical horizons there.'

    },
    {
        Photo: require('../../assets/Images/choihung.jpg'),
        Location: 'Choi Hung Estates',
        Photographer: 'By Hugo Cheng',
        Distance: '6.6K',
        Description: 'Choi Hung Estates are surrounded with a lot of colorful buildings and basketball court, make it one of the most popular place for photography  .'
    },
    {
        Photo: require('../../assets/Images/swimmingshed.jpg'),
        Location: 'Swimming Shed',
        Photographer: 'By Alistair Tam',
        Distance: '1.6K',
        Description: 'A sunset spot hidden in Sai Wan, it required a 15 mins walk to reach there from Kennedy Town.'
    },
    {
        Photo: require('../../assets/Images/replusebay.jpg'),
        Location: 'Repluse Bay',
        Photographer: 'By Denise Cheng',
        Distance: '4.6K',
        Description: 'A great place for relexation and portrait photography, best to bring a portriat lens'
    },
    {
        Photo: require('../../assets/Images/lugardroad.jpg'),
        Location: 'Lugard Road',
        Photographer: ' By Erik Hendenfalk',
        Distance: '3.1K',
        Description: ' A breath-taking view of Hong Kong city, try to stay there until it gets dark, you wont regret it!'
    }
]

export default class Recommendations extends Component {

    state = {
        modalVisible: false,
        Objnumber: 0
    };

    setModalVisible(visible, i) {
        this.setState({ modalVisible: visible });
        this.state.Objnumber = i
    }

    render_Recommendation() {
        return RecommendArray.map(function (rec, i) {
            return (
                <Card key={i}>
                    <CardItem cardBody button onPress={() => this.setModalVisible(true, i)}>
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
                            <Image style={styles.modalimage} source={RecommendArray[this.state.Objnumber].Photo} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text style={styles.modaltext}>{RecommendArray[this.state.Objnumber].Location}</Text>
                                    <Text note>  {RecommendArray[this.state.Objnumber].Photographer}</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text style={styles.direction}>Directions</Text>
                                <Text note>{RecommendArray[this.state.Objnumber].Distance}</Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Text style={{textAlign: 'center'}}>{RecommendArray[this.state.Objnumber].Description}</Text>
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
        height: 450,
        flex: 1
    },
    modaltext: {
        paddingTop: 20,
        fontSize: 20
    },
    direction: {
        fontSize: 20,
        color: "#ff8396",
        paddingTop: 20
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
