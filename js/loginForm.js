import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
   return (
    <View style={styles.container}>
        <TextInput
            placeholder='Username or Email'
            placeholderTextColor='rgba(255,255,255,0.7)'
            underlineColorAndroid='rgba(255,255,255,0)'
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} />

        <TextInput
            placeholder='Password'
            placeholderTextColor='rgba(255,255,255,0.7)'
            underlineColorAndroid='rgba(255,255,255,0)'
            returnKeyType="go"
            style={styles.input}
            secureTextEntry
            ref={(input) => this.passwordInput = input} />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.logonWrapper}>
          <Text style={styles.logonText}>Faça seu cadastro aqui!</Text>
        </View>
    </View>
   );
  }
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      fontSize: 18,
      height: 40,
      marginBottom: 15,
      color: '#FFF',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#FFF',
      borderRadius: 1
    },

    container: {
      padding: 20,
      flexGrow: 1
    },

    buttonContainer: {
      borderRadius: 2,
      backgroundColor: '#FFFFFF',
      paddingVertical: 15,
      marginBottom: 15
    },

    buttonText: {
      textAlign: 'center',
      color: '#e33f11',
      fontWeight: '700'
    },

    logonWrapper: {
      marginBottom: 30,
      flexGrow: 1,
      justifyContent: 'center'
    },

    logonText: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'center'
    }
});
