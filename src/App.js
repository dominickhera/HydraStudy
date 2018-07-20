import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator, TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation'
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-ionicons';

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import Settings from './Settings'


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
    Settings,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const SettingsStack = StackNavigator({
Settings: {screen: Settings},
});

// export default App

export default TabNavigator(
  {
    Home: { screen: App },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Text/>;
        return <Icon ios="ios-add" android="md-add" />;
        // return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
