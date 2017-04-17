import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
    <KeyboardAvoidingView behavior="padding" style={styles.loginWrapper}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>PedidaCerta</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View>
    </KeyboardAvoidingView>
   );
  }
}

const styles = StyleSheet.create({
    loginWrapper: {
        flex: 1,
        backgroundColor: '#e33f11'
    },

    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },

    logoText: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: '400'
    },

    formContainer: {
      flexGrow: 1,
      justifyContent: 'flex-end',
    }
});
