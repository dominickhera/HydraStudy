import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import firebase from 'react-native-firebase';
// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'


const config = {
  apiKey: "AIzaSyAmQZvQGUccFbCkMWm6j7JxV96yKEaUhXs",
  authDomain: "hydra-study.firebaseapp.com",
  databaseURL: "https://hydra-study.firebaseio.com",
  projectId: "hydra-study",
  storageBucket: "hydra-study.appspot.com",
  messagingSenderId: "52440901460"
};
firebase.initializeApp(config);

// create our app's navigation stack
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

export default App
