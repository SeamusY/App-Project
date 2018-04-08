import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { TouchableOpacity, View } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
export default class Events extends Component {
  state = {
    timeStart: 0,
    timeEnd: 0,
    isDateTimePickerVisible: false
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {
    // Set State;
    alert('A date has been picked: '+ datetime);
    this._hideDateTimePicker();
  };
    render() {
      return (
        <Container style={{ backgroundColor: '#fff', paddingTop: 70 }}>
          <Content>
            <List>
              <ListItem icon noBorder>
                <Left>
                  <Icon name="ios-time" style={{ color: '#ff8396' }} />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <TouchableOpacity onPress={this._showDateTimePicker}>
                    <View>
                      <Text>Show DatePicker</Text>
                    </View>
                  </TouchableOpacity>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    mode='datetime'
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
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
                  <Icon name="ios-navigate" style={{ color: '#ff8396' }} />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text style={{ alignSelf: 'center', fontSize: 20 }}>Pick A Location</Text>
                  <Text note style={{ alignSelf: 'center' }}>Deep Water Bay</Text>
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
                  <Icon name="ios-paper" style={{ color: '#ff8396' }} />
                </Left>
                <Body style={{ borderBottomWidth: 0 }}>
                  <Text style={{ alignSelf: 'center', fontSize: 20 }}>Add Desciption</Text>
                  <Text note style={{ alignSelf: 'center' }}>10th May, Thursday</Text>
                </Body>
                <Right style={{ borderBottomWidth: 0 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </Content>

          <Button full info style={{ backgroundColor: "#ff8396" }}>
            <Text>Submit</Text>
          </Button>




        </Container>



      );
    }
  }
