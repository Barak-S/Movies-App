import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import Swipeout from 'react-native-swipeout';


export default class AddFriends extends React.Component{

    state={
        selected: false
    }

    swipeoutBtns = [
        {
          text: 'Delete',
          backgroundColor: '#ff414e',
          onPress: () => this.props.removeFriend(this.props.friend.id )
        },
    ]

    render(){

        let view;
        this.props.removeFriend ?
            view=<Swipeout right={this.swipeoutBtns} style={{backgroundColor: "#333", height: 115}}>
                    <View style={styles.container}>
                    <Text style={styles.title}>{this.props.username}</Text>

                    <Ionicons
                    name='ios-person'
                    size={35}
                    style={{ marginTop: 10, color: "#A5DB55",}}
                    onPress={() => this.props.selectFriend(this.props.friend)}
                    />
                    </View>
                </Swipeout>
            :
            view=<View style={{borderRadius: 10,borderWidth: 1.79,borderColor: '#A5DB55',width: 385,height: 100,marginTop: 8,marginBottom: 8,alignItems: "center", justifyContent: 'flex-start'}}>
                    <Text style={styles.title}>{this.props.username}</Text>
                    <Ionicons
                    name='ios-person-add'
                    size={35}
                    style={{ marginTop: 10, color: "#A5DB55",}}
                    onPress={() => this.props.addFriend(this.props.id)}
                    />
                    </View>



        return(
            
            view  
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderWidth: 2.79,
      borderColor: '#A5DB55',
      width: 385,
      height: 100,
      marginTop: 1,
      marginBottom: 1, 
      alignItems: "center", 
      justifyContent: 'flex-start'
    },
    title: {
      fontSize: 21,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 11
    },

})