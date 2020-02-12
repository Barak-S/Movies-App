import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import {Alert} from 'react-native';

export default class Profile extends React.Component{


    render(){

        return(
            <View style={styles.container}>
                <Text style={{color: '#fff', fontSize: 25, fontWeight: '300', marginBottom: 10 }}>Movie Project App</Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300', }}>Created by: Barak Saidoff</Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300', margin: 20, textAlign: "center"  }}>This apps intended purposes are for colaborating with friends over shared interests of movies and TV shows. The Open Movie Database (OMDB) API is a free RESTful web service to obtain movie and tv show information for users.</Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300' }}>Front-End: React Native </Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300' }}>Back-End: Ruby on Rails </Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300', marginTop: 12 }}>PostgreSQL </Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300' }}>Ngrok for multiplatfrom tunneling </Text>

                <TouchableHighlight onPress={()=>Alert.alert('Are you sure?', 'This action cannot be undone',[{text: 'Cancel', onpress:()=> console.log("cancel"), style: 'cancel'}, {text: 'Delete', onPress:()=>this.props.screenProps.deleteAcc()},], 'secure-text')}>
                    <Text style={{textAlign: "center", fontSize: 20, fontWeight:'700', color: "#ff414e", marginTop: 115}}>Delete Account</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

// ()=>this.props.screenProps.deleteAcc()

const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 65,

    }
})