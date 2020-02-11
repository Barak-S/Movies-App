import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';


export default class Profile extends React.Component{


    render(){

        return(
            <View style={styles.container}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300' }}>React Native Movie Project App</Text>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: '300' }}>Created by: Barak Saidoff</Text>
                <TouchableHighlight onPress={()=>this.props.screenProps.deleteAcc()}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#ff414e", marginTop: 75}}>Delete Account</Text>
                </TouchableHighlight>
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
      paddingTop: 65,

    }
})