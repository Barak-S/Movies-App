import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class AddFriends extends React.Component{

    state={
        selected: false
    }

    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.username}</Text>
                    {this.props.addFriend ? 
                    <Ionicons
                    name='ios-person-add'
                    size={35}
                    style={{ marginTop: 10, color: "#ff414e",}}
                    onPress={() => this.props.addFriend(this.props.id)}
                    />
                    :
                    <Ionicons
                    name='ios-person'
                    size={35}
                    style={{ marginTop: 10, color: "#ff414e",}}
                    onPress={() => this.props.selectFriend(this.props.friend)}
                    />
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      borderWidth: 1.79,
      borderColor: '#ff414e',
      width: 385,
      height: 100,
      marginTop: 12.5,
      marginBottom: 12.5, 
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