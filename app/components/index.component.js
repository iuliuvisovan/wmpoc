import React, {Component} from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  PixelRatio,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import HomeComponent from './home.component';
import BookingsComponent from './bookings.component';
import NotificationsComponent from './notifications.component';

var {height: vh, width: vw} = Dimensions.get('window');

export default class IndexComponent extends Component {
  state = {
    currentPage: <HomeComponent/>
  }

  render() { 
    return (
      <View style={{
        overflow: 'visible'
      }}>
        <View style={styles.header}>
          <View
            style={{
            flexDirection: 'row',
            padding: 10
          }}>
            <Image style={styles.searchIcon} source={require('../../img/search-icon.png')}/>
            <TextInput
              placeholderTextColor="#6d7880"
              style={styles.searchInput}
              placeholder="Search for location, city, event..."
              underlineColorAndroid="transparent"/>
            <TouchableOpacity>
              <Image
                style={styles.messagesIcon}
                source={require('../../img/messages-icon.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.menuIcons}>
            <TouchableOpacity
              onPress={() => this.setState({currentPage: <HomeComponent/>})}>
              <Image
                style={styles.menuIconStyle}
                source={require('../../img/menu-icon-1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({currentPage: <BookingsComponent/>})}>
              <Image
                style={styles.menuIconStyle}
                source={require('../../img/menu-icon-2.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.menuIconStyle}
                source={require('../../img/menu-icon-3.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({currentPage: <NotificationsComponent/>})}>
              <Image
                style={styles.menuIconStyle}
                source={require('../../img/menu-icon-4.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.menuIconStyle}
                source={require('../../img/menu-icon-5.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.currentPage}
        <TouchableOpacity style={styles.newBookingButton}>
          <Image
            style={styles.newBookingImage}
            source={require('../../img/new-booking.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const themeColors = {
  gray: '#333f49'
}

const styles = StyleSheet.create({
  newBookingImage: {
    width: 35,
    height: 35
  },
  newBookingButton: {
    elevation: 10,
    position: 'absolute',
    right: 20,
    width: 60,
    height: 60,
    bottom: vh / 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0b323',
    borderRadius: 30,
    zIndex: 50,
    shadowOffset: {
      width: 50,
      height: 50
    },
    shadowColor: 'black',
    shadowOpacity: 1.0
  },
  menuIconStyle: {
    width: 30,
    height: 30
  },
  menuIcons: {
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: 'row'
  },
  messagesIcon: {
    width: 45,
    height: 45,
    margin: 10,
    marginTop: 0,
    marginRight: 0
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 2,
    width: 30,
    height: 30,
    top: 18,
    left: 23
  },
  searchInput: {
    fontSize: 13,
    backgroundColor: '#28343d',
    borderBottomWidth: 0,
    paddingLeft: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    // marginLeft: -23,
    flex: 1,
    color: '#fff',
    height: 50,
    fontWeight: "300"
  },
  header: {
    flexWrap: 'wrap',
    backgroundColor: themeColors.gray,
    height: 130,
    justifyContent: "center"
  }
});

AppRegistry.registerComponent('IndexComponent', () => IndexComponent);
