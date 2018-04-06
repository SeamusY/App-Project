import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
} from 'react-native';

import { Container, Content, Button, Icon, List, ListItem, Text, Thumbnail, } from 'native-base';
const datas = [
   'Lugard Road Shootout',
   'Lions Rock Sunset Shootout',
   'Victoria Habour shootout',
   'Tai Tam Rerservoir',
   'Central Urban shootout',
   'MongKok Night photography',
   'Lugard Road Shootout',
   'Lions Rock Sunset Shootout',
   'Victoria Habour shootout',
   'Tai Tam Rerservoir',
   'Central Urban shootout',
   'MongKok Night photography'
]


export default class SwipeableListExample extends Component {
    constructor(props) {
      super(props);
      this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        basic: true,
        listViewData: datas,
      };
    }
    deleteRow(secId, rowId, rowMap) {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = [...this.state.listViewData];
      newData.splice(rowId, 1);
      this.setState({ listViewData: newData });
    }
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
          <Container>
            <Content>
              <List
                dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                renderRow={data =>
                  <ListItem>

                    <Thumbnail source={{ uri: 'https://instagram.fhkg4-1.fna.fbcdn.net/vp/0ce050da9da06c9918816616e4ae1a83/5B5EBC9D/t51.2885-19/s150x150/28764392_175336276604502_8864108506559545344_n.jpg' }}  style={{paddingLeft: 60}}/>

                    <Text style= {{paddingRight: 50, paddingLeft: 50}}> {data} </Text>
                    
               <Icon  name="ios-bookmark" style={{flex: 1, color: "#E75480", justifyContent: 'flex-end'}}/>
               
                  </ListItem>}
                renderLeftHiddenRow={data =>
                  <Button full onPress={() => alert(data)}>
                    <Icon active name="information-circle"  style={{paddingLeft: 30}}/>
                  </Button>}
                renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                  <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                    <Icon active name="trash" />
                  </Button>}
                leftOpenValue={75}
                rightOpenValue={-75}
              />
            </Content>
          </Container>
        );
      }
    }

    
