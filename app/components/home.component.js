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

export default class HomeComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ScrollView style={{
        backgroundColor: '#121e29'
      }}>
        <View style={styles.currentBooking}>
          <Text style={styles.currentBookingCaption}>
            YOUR BOOKING TODAY
          </Text>
          <Text style={styles.currentBookingTitle}>
            Starts in 05:13h
          </Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <Image
              style={styles.currentBookingPhoto}
              source={require('../../img/current-booking-photo.png')}/>
            <View style={styles.currentBookingInfo}>
              <Text style={styles.currentBookingName}>
                P + A Office
              </Text>
              <Text style={styles.currentBookingDescription}>
                Desk, Private Office
              </Text>
              <Text style={styles.currentBookingDescription}>
                Feb 12 - Aug 12, 2017
              </Text>
            </View>
          </View>
          <View style={styles.currentBookingTraffic}>
            <Image
              style={styles.currentBookingTrafficIcon}
              source={require('../../img/traffic-icon.png')}/>
            <View style={{
              width: '55%'
            }}>
              <Text style={styles.currentBookingCaption}>
                Light traffic along the way
              </Text>
              <Text
                style={{
                color: '#fff',
                fontSize: 12,
                marginTop: 10
              }}>
                Typical conditions with delays up to 9 minutes.
              </Text>
            </View>
            <View
              style={{
              padding: 13,
              paddingBottom: 0,
              flexDirection: 'row'
            }}>
              <TouchableOpacity>
                <Image
                  style={styles.actionButton}
                  source={require('../../img/current-booking-actions-call.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.actionButton}
                  source={require('../../img/current-booking-actions-map.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.list}>
            <Text style={styles.listCaption}>
              YOUR EVENTS TODAY
            </Text>
            <View style={styles.listItem}>
              <Image style={styles.listItemImage} source={require('../../img/event-1.png')}/>
              <View style={{
                marginLeft: 15
              }}>
                <Text style={styles.listItemTitle}>
                  Music Travel Festival 2017
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  Tue, 4 September • ING Bankg Antwerp Belgium Test
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  Adrian Sarbu and 23 connections
                </Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <Image style={styles.listItemImage} source={require('../../img/event-2.png')}/>
              <View style={{
                marginLeft: 15
              }}>
                <Text style={styles.listItemTitle}>
                  A Conversation on Social Innovation & Technology Adventure
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  Tue, 4 September • Coworking Spantenure Highway Test
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  100 people joining
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.connectionsNearbyList}>
            <Text style={styles.listCaption}>
              YOUR CONNECTIONS NEARBY
            </Text>
            <View style={styles.listItem}>
              <Image
                style={styles.listItemImage}
                source={require('../../img/connections-1.png')}/>
              <View style={{
                marginLeft: 15
              }}>
                <Text style={styles.listItemTitle}>
                  Silviu RUNCEANU
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  UX / UI designer
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  0.3 km away
                </Text>
                <TouchableOpacity style={styles.sendMessageButton}>
                  <Image
                    style={styles.sendMessageImage}
                    source={require('../../img/message-connection.png')}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.listItemImage}
                source={require('../../img/connections-2.png')}/>
              <View style={{
                marginLeft: 15
              }}>
                <Text style={styles.listItemTitle}>
                  Andrew HYDE

                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  Developer
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  0.5 km away
                </Text>
                <TouchableOpacity style={styles.sendMessageButton}>
                  <Image
                    style={styles.sendMessageImage}
                    source={require('../../img/message-connection.png')}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.listItemImage}
                source={require('../../img/connections-3.png')}/>
              <View style={{
                marginLeft: 15
              }}>
                <Text style={styles.listItemTitle}>
                  Andy MINDALE
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  Developer
                </Text>
                <Text numberOfLines={1} style={styles.listItemDescription}>
                  1.2 km away
                </Text>
                <TouchableOpacity style={styles.sendMessageButton}>
                  <Image
                    style={styles.sendMessageImage}
                    source={require('../../img/message-connection.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  sendMessageImage: {
    width: 25,
    height: 25
  },
  sendMessageButton: {
    position: 'absolute',
    right: 15,
    width: 40,
    height: 40,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0b323',
    borderRadius: 30
  },
  listItemImage: {
    width: 60,
    height: 60
  },
  listItemDescription: {
    color: '#7c868d',
    fontSize: 11,
    width: vw - 100,
    flex: 1,
    overflow: 'hidden',
  },
  listItemTitle: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 13,
  },
  listItem: {
    marginVertical: 4,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#0f171f'
  },
  listCaption: {
    color: '#7c868d',
    fontWeight: '500',
    fontSize: 11,
    left: 15,
    marginBottom: 4,
  },
  list: {
    marginTop: 30,
    alignItems: 'flex-start'
  },
  connectionsNearbyList: {
    marginTop: 30,
    alignItems: 'flex-start',
    marginBottom: 200
  },
  actionButton: {
    width: 55,
    height: 55
  },
  currentBookingTrafficIcon: {
    marginRight: 10,
    width: 30,
    height: 30
  },
  currentBookingTraffic: {
    flexDirection: 'row',
    marginTop: 20
  },
  currentBookingDescription: {
    fontSize: 11,
    fontWeight: "300",
    color: '#0f171f'
  },
  currentBookingName: {
    color: '#fff',
    fontWeight: "300",
    fontSize: 20,
    marginBottom: 5
  },
  currentBookingPhoto: {
    marginTop: 20,
    marginLeft: -5,
    width: 130,
    height: 130
  },
  currentBookingInfo: {
    paddingLeft: 10,
    justifyContent: "center"
  },
  currentBookingTitle: {
    fontWeight: "500",
    fontSize: 27,
    marginTop: -5,
    fontFamily: 'Roboto',
    color: '#fff'
  },
  currentBookingCaption: {
    fontWeight: "500",
    fontSize: 13,
    fontFamily: 'Roboto',
    color: '#0f171f'
  },
  currentBooking: {
    backgroundColor: '#f0b323',
    alignSelf: "stretch",
    padding: 20,
    paddingTop: 25
  }
});

AppRegistry.registerComponent('HomeComponent', () => HomeComponent);
