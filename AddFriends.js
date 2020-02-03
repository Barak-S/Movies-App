import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';


export default class AddFriends extends React.Component{

    state={
        searchFriendTerm: ""
    }

    handleChange=(text)=> {
        this.setState({
            searchFriendTerm: text
        })
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 24, fontWeight: '600', marginTop: 40, color: '#fff', marginBottom: 30}}>Search by Username</Text>
                <TextInput style={styles.searchBox} onChange={(text)=>this.handleChange(text)}/>
                
            </View>
        )
    }
}

    // below textInput render a friends container that renders Profile cards => onPress = Modal => button to follow
    //  fetches to "http://localhost:3000/users"
    // ? how to search all users b yusername - in  backend ??
    
    
const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      alignItems: "center",
      justifyContent: 'flex-start',

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
    watchLater:{
        padding: 15,
        margin: 30,
        backgroundColor: '#ff414e',
        borderRadius: 10,
    }

  })