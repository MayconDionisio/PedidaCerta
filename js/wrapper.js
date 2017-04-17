import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './login';


export default class Wrapper extends Component {
  render() {

   return (
     <View  style={{flex:1}}>
       <Login />
     </View>
   );
  }
}
