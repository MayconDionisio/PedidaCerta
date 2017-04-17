/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Wrapper from './wrapper';

class PedidaCerta extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Wrapper />
      </View>
    );
  }
}

export default PedidaCerta;
