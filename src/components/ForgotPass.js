import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { Component} from 'react'
import * as  firebase from 'firebase'
 
export default class ForgotPass extends Component {

  state = {
    email: '',
    errorMessage: null,
  };

  SendEmail = () => {
    const { email } = this.state;

    var auth = firebase.auth();
        auth
        .sendPasswordResetEmail(email).then(function() {
           Alert.alert("Aviso", "Enviamos um email para " + email)
          })
        
        .catch(error => this.setState({ errorMessage: error.message }))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')}
        style={styles.logo}
        />
        <Text>Digite seu email para redefinir sua senha</Text>

          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

          <TextInput 
            style={styles.input}  
            placeholder="Digite seu email"
            onChangeText={email => this.setState( { email } )}
            value={this.state.email}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={this.SendEmail}>

            <Text style={styles.textb}>Enviar</Text>

          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6c1fe'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: 300,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498db',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textb: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "30"
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  }
});
