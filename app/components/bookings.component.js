import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

var {height: vh, width: vw} = Dimensions.get('window');

export default class BookingsComponent extends Component {
  render() {
    return (<Image style={styles.page} source={require('../../img/bookings-page.png')}/>);
  }
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: vh / 1.3,
  }
});

AppRegistry.registerComponent('BookingsComponent', () => BookingsComponent);
