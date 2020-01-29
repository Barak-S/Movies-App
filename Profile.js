import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';


export default class Profile extends React.Component{



    render(){
        return(
            <View style={styles.container}>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: '600' }}>Barak Saidoff</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 24,

    }
})







