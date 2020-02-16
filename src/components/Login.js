import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { Component} from 'react'
import * as  firebase from 'firebase'
 
export default class App extends Component {

  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  login = () => {
    const { email, password } = this.state;

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({ errorMessage: error.message }));
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')}
        style={styles.logo}
        />

          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

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
            onPress={this.login}>

            <Text style={styles.textb}>Login</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("Register")}>
            <Text style={{padding: 10}}>
              Crie sua conta <Text style={{fontWeight: '500', color: '#E9446A'}}>Aqui</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPass")}>
            <Text>
              Esqueceu sua senha?  <Text style={{fontWeight: '500', color: '#E9446A'}}>Redefina aqui</Text>
            </Text>
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
