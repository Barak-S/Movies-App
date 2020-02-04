import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import ProfileCard from './ProfileCard'



export default class Profile extends React.Component{



    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontSize: 28, fontWeight: '600', color: '#ff414e', marginBottom: 9}}>Friends</Text>
                <View style={{borderBottomWidth: 1.5, borderBottomColor: '#ff414e', width: 400, }}></View>
                <ScrollView>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </ScrollView>
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
      paddingTop: 35,

    }
})