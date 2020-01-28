import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';


export default class Profile extends React.Component{

    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#ffde22',
        },
        headerTintColor: '#ff414e',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
    
        }
    };

    render(){
        return(
            <View style={styles.container}>
                <Text>Profile</Text>
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









