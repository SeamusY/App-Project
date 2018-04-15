import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { TouchableOpacity, View, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import axios from 'axios';
import moment from 'moment'
export default class Events extends Component {
  state = {
    timeStart: 0,
    timeEnd: 0,
    isDateTimePickerVisible: false,
    text: ''
  };


  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {
    this.setState
    chosenDate: moment(datetime).format('MMM, Do YYYY HH:mm')
    //alert('A date has been picked: ' + datetime);
    axios.post('http://10.0.2.2:3000/events', {
      hostId: 1,
      datetime: datetime
    })
      .then((response) => {
        console.log(response)
        this._hideDateTimePicker();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Container style={{ backgroundColor: '#fff', paddingTop: 70 }}>
        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-time" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                  <View>
                    <Text style={styles.text}>Date And Time Picker</Text>
                    <Text note>{this.state.chosenDate}</Text>
                  </View>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  mode='datetime'
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                  is24Hour={false}
                />
              </Body>
              <Right style={styles.body}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-navigate" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Add A Location</Text>
                {/* <Text note style={{ alignSelf: 'center' }}>Deep Water Bay</Text> */}
                <TextInput
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({ text })}
                />
              </Body>
              <Right style={{ borderBottomWidth: 0 }}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Content>
          <List>
            <ListItem icon noBorder>
              <Left>
                <Icon name="ios-paper" style={styles.icon} />
              </Left>
              <Body style={styles.body}>
                <Text style={styles.text}>Add Event's Title</Text>
                {/* <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text> */}
                <TextInput
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({ text })}
                />
              </Body>
              <Right style={styles.body}>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>

        <Button full info style={styles.button}>
          <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20
  },
  body: {
    borderBottomWidth: 0
  },
  icon: {
    color: '#ff8396'
  },
  button: {
    backgroundColor: "#ff8396",
    marginBottom: 40
  }


});