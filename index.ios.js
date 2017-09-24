import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import IndexComponent from './app/components/index.component';

export default class myapp extends Component {
  render() {
    return (<IndexComponent/>);
  }
}
AppRegistry.registerComponent('myapp', () => myapp);