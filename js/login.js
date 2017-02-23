import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: 'login',
      pass: ''
    };
  }

  render() {
   const { region } = this.props;
   console.log(region);

   return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
      <TextInput
          style={{height: 40, width:300}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
      />
      <TextInput
          style={{height: 40, width:300}}
          onChangeText={(pass) => this.setState({pass})}
          value={this.state.pass}
          secureTextEntry={true}
      />
      </View>
      <View>
      <Button title="Login"
        style={{height: 40, width:40}} />
      </View>
    </View>
   );
  }
}
