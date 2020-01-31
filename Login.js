import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';


export default class Login extends React.Component{


    render(){
        return(
            
            <View style={styles.container}>
                <Text style={{fontSize: 25, padding: 60, fontWeight: '600', color: '#fff'}}>Log In</Text>
                <TextInput
                    style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: '#fff', borderRadius: 12, marginBottom: 25}}
                    onChangeText={(text)=> this.props.handleUsername(text)} placeholder="Username"
                />
                <TextInput
                    style={{fontSize: 20, padding: 12, width: '55%', backgroundColor: '#fff', borderRadius: 12, marginBottom: 35}}
                    onChangeText={(text)=> this.props.handlePassword(text)} placeholder="Password" secureTextEntry={true}
                />
                <TouchableHighlight style={styles.login} onPress={()=>this.props.handleSubmit()}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'600', color: "#fff"}}>Login</Text>
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
      paddingTop: 24
    },
    title: {
      color: '#ff414e',
      fontWeight: '700',
      fontSize: 32,
      textAlign: "center",
      marginBottom: 20
    },
    searchBox:{
      fontSize: 21,
      padding: 20,
      width: '92%',
      backgroundColor: '#fff',
      borderRadius: 15,
    },
    results: {
      flex: 1,
    },
    popup: {
      padding: 50,
      backgroundColor: '#333',
      flex:1,
    },
    popTitle:{
      fontSize: 29,
      fontWeight: '600',
      color: '#ff414e',
    },
    closeBtn:{
      padding: 20,
      fontSize: 24,
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#ff414e'
    },
    backButton:{
      width: '100%',
      height: 45,
      backgroundColor: '#ff414e'
    },
    login:{
        padding: 13,
        margin: 30,
        backgroundColor: '#ff414e',
        borderRadius: 10,
    }

  })