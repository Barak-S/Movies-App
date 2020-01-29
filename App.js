  
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen'

import Navigator from './routes/Drawer'

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import { DrawerActions } from 'react-navigation-drawer';

// this.props.navigation.dispatch(DrawerActions.toggleDrawer());


export default class App extends React.Component {
  
  render() {
    return (
      <Navigator/>
      )
    }
      
  }

  