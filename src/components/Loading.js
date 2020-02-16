import React, { Component} from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native'
import * as firebase from 'firebase'
 
export default class Loading extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <Text> Loading</Text>
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: '#b6c1fe'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
      },
  });