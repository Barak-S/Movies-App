import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import ProfileCard from './ProfileCard'

export default class AddFriends extends React.Component{

    state={
        searchFriendTerm: "",
        result: []
    }

    handleChange=(text)=> {
        this.setState({
            searchFriendTerm: text
        })
    }

    handleSubmit=()=>{
        fetch('http://localhost:3000/users/')
        .then(resp=>resp.json())
        .then(users => this.setState({
            result: users.filter(user => user.username.toLowerCase().includes(this.state.searchFriendTerm.toLowerCase()))
        },()=>console.log(this.state.result)))

    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 24, fontWeight: '600', marginTop: 40, color: '#fff', marginBottom: 17}}>Search by Username</Text>
                <TextInput style={styles.searchBox} onChangeText={(text)=>this.handleChange(text)} onSubmitEditing={this.handleSubmit} autoCapitalize = 'none'/>
                <ScrollView>
                    {this.state.result.map(user=>{
                        return(
                            <ProfileCard
                                key={user.id}
                                username={user.username}
                            />
                        )
                    })}
                </ScrollView>
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
      marginBottom: 7,
      width: '92%',
      backgroundColor: '#fff',
      borderRadius: 15,
    },
})