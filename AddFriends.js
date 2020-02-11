import React from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard'

const serverURL = 'http://2ed56f56.ngrok.io'

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
        fetch(`${serverURL}/users/`)
        .then(resp=>resp.json())
        .then(users => this.setState({
            result: users.filter(user => user.username.toLowerCase().includes(this.state.searchFriendTerm.toLowerCase()) && user.id !== this.props.screenProps.userId ).sort((a, b) => a.username.localeCompare(b.username))
        }))

    }

    addFriend=(friendID)=>{
        fetch(`${serverURL}/follows`,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ follower_id: this.props.screenProps.userId,  followee_id: friendID})
        }).then(resp=> resp.json())
        .then(data=>alert(`Added ${data.followee.username}!`))
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