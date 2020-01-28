  
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen'
import Menu from './Menu'

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerActions } from 'react-navigation-drawer';

// this.props.navigation.dispatch(DrawerActions.toggleDrawer());


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: Menu
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);




export default class App extends React.Component {
  
  render() {
    return (
      <AppContainer/>
      )
    }
      
  }

  