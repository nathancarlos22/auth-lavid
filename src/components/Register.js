import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { Component} from 'react'
import * as  firebase from 'firebase'
 
export default class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    errorMessage: null,
  };

  handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(credentials => {
        return credentials.user.updateProfile({
            displayName: this.name
        })
    })
    .catch(err => this.setState({errorMessage: err.message}));
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Cadastre-se agora</Text>

          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

          <TextInput 
            style={styles.input}  
            placeholder="Nome completo"
            onChangeText={name => this.setState( { name } )}
            value={this.state.name}
          />

          <TextInput 
            style={styles.input}  
            placeholder="Digite seu email"
            onChangeText={email => this.setState( { email } )}
            value={this.state.email}
          />
          
          <TextInput 
            style={styles.input}
            secureTextEntry={true}   
            autoCapitalize='none'                  
            placeholder="Digite sua senha"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={this.handleSignUp}>

            <Text style={styles.textb}>Cadastrar</Text>

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
