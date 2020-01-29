import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, SafeAreaView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';


export default class Menu extends React.Component {



    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.container}>Menu</Text>
            </View>
        )
    }


}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#ffde22',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 24
    }
})