import Home from './src/components/Home'
import Login from './src/components/Login'
import Register from './src/components/Register'
import Loading from './src/components/Loading'
import ForgotPass from './src/components/ForgotPass'

import { createAppContainer, createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import * as  firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDsMgKeWJPu0Wd6Sa9kSIBXN6SooE1Ul5w",
  authDomain: "lavid-autentication.firebaseapp.com",
  databaseURL: "https://lavid-autentication.firebaseio.com",
  projectId: "lavid-autentication",
  storageBucket: "lavid-autentication.appspot.com",
  messagingSenderId: "668620758204",
  appId: "1:668620758204:web:d9c29835a3cea5f6d204b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: Home
})

 const AuthStack = createStackNavigator({
   Login: Login,
   Register: Register,
 })

 const AuthStack2 = createStackNavigator({
  Login: Login,
  ForgotPass: ForgotPass
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack,
      Auth2: AuthStack2
      
    },
    {
      initialRouteName: "Loading"
    }
  )  
);