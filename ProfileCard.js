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
        {
          text: 'Message',
          backgroundColor: '#7EB09B',
        }
    ]

    render(){

        let view;
        this.props.removeFriend ?
            view=<Swipeout right={this.swipeoutBtns} style={{backgroundColor: "#333", height: 115}}>
                    <View style={styles.container}>
                    <Text style={styles.title}>{this.props.username}</Text>

                    <Ionicons
                    name='ios-contact'
                    size={35}
                    style={{ marginTop: 10, color: "#ff414e",}}
                    onPress={() => this.props.selectFriend(this.props.friend)}
                    />
                    </View>
                </Swipeout>
            :
            view=<View style={{borderRadius: 10,borderWidth: 2.79,borderColor: '#7EB09B',width: 385,height: 100,marginTop: 8,marginBottom: 8,alignItems: "center", justifyContent: 'flex-start'}}>
                    <Text style={styles.title}>{this.props.username}</Text>
                    <Ionicons
                    name='ios-person-add'
                    size={35}
                    style={{ marginTop: 10, color: "#ff414e",}}
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
      borderColor: '#7EB09B',
      width: 385,
      height: 100,
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