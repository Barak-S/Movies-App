import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class Profile extends React.Component{


    render(){

        return(
            <View style={styles.container}>
                <Text style={{color: '#333', fontSize: 29, fontWeight: '600', color: '#ffd700', marginBottom: 9 }}>Hi {this.props.screenProps.username}!</Text>
                <View style={{borderBottomWidth: 1.5, borderBottomColor: '#ffd700', width: 400}}></View>
                <TouchableHighlight style={styles.addFriends} onPress={()=>this.props.navigation.navigate('AddFriends')}>
                    <View>
                        <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#333"}}> 
                            <Ionicons
                                name='ios-person-add'
                                size={32}
                                style={{ marginTop: 10, color: "#333"}}
                            
                            />  Add Friends</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.friends} onPress={()=>this.props.navigation.navigate('MyFriends')}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#333"}}>My Friends</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.logOut} onPress={()=>this.props.screenProps.logOut()}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#333"}}>Log out</Text>
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
      paddingTop: 28,

    },
    logOut:{
        padding: 13,
        marginTop: 75,
        backgroundColor: '#ffd700',
        borderRadius: 10,
    },
    addFriends:{
        padding: 6,
        marginTop: 43,
        backgroundColor: '#ffd700',
        borderRadius: 10,
        alignContent: 'flex-start',
    },
    friends:{
        padding:13,
        marginTop: 20,
        backgroundColor: '#ffd700',
        borderRadius: 10,
        alignContent: 'flex-start',
    }
})







