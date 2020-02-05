import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import ProfileCard from './ProfileCard'



export default class Profile extends React.Component{

    state={
        friends: [],
        selectedFriend: {}
    }

    //fetch to get all follows where follower_id is this.props.screenProps.userId 
    getFreindsMovies=()=>{
        fetch("http://localhost:3000/follows/find_my_followees",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ follower_id: this.props.screenProps.userId })
        })
        .then(resp=> resp.json())
        .then(friends => this.setState({
            friends: friends
        },()=>console.log(friends)))
    }

    componentDidMount(){
        this.getFreindsMovies()

    }

    selectFriend=(friend)=>{
        console.log(friend)
        this.setState({
            selectFriend: friend
        })
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={{fontSize: 28, fontWeight: '600', color: '#ff414e', marginBottom: 9}}>Friends</Text>
                <View style={{borderBottomWidth: 1.5, borderBottomColor: '#ff414e', width: 400, }}></View>
                <ScrollView>
                    {this.state.friends.map(friend=> {
                        return(
                            <ProfileCard
                            key={friend.id}
                            username={friend.username}
                            friend={friend}
                            selectFriend={this.selectFriend}
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
      paddingTop: 35,

    }
})