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
            result: users.filter(user => user.username.toLowerCase().includes(this.state.searchFriendTerm.toLowerCase()) && user.id !== this.props.screenProps.userId )
        }))

    }

    addFriend=(friendID)=>{
        fetch("http://localhost:3000/follows",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ follower_id: this.props.screenProps.userId,  followee_id: friendID})
        }).then(resp=> resp.json())
        alert("added")
    }



    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontSize: 24, fontWeight: '600', marginTop: 30, color: '#fff', marginBottom: 17}}>Search by Username</Text>
                <TextInput style={styles.searchBox} onChangeText={(text)=>this.handleChange(text)} onSubmitEditing={this.handleSubmit} autoCapitalize = 'none'/>
                <ScrollView>
                    {this.state.result.map(user=>{
                        return(
                            <ProfileCard
                                key={user.id}
                                id={user.id}
                                username={user.username}
                                addFriend={this.addFriend}
                            />
                        )
                    })}
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