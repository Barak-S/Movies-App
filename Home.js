import React, { Component } from 'react';
import { Text, View } from 'react-native';

// import StyleSheet from react-native when using StyleSheet.create() to define several style in one place

export default class Home extends Component {
  render() {
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style ={{fontSize: 25}}>Hi Barak</Text>
    </View> 
    );
  }
}