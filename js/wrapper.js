import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Login from './login';

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 }
});

export default class Wrapper extends Component {
  render() {
   const { region } = this.props;
   console.log(region);

   return (
     <View style ={styles.container}>
       <Login />
     </View>
   );
  }
}
