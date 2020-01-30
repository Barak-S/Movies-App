  
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';

import Navigator from './routes/Drawer'
import Login from './Login'


export default class App extends React.Component {

  state={
    loggedIn: true
  }

  
  
  render() {
    let view;
    this.state.loggedIn ? view=<Navigator/> : view=<Login/>

    return (

      view
      
      )
    }
      
  }

  