import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class Profile extends React.Component{


    render(){

        return(
            <View style={styles.container}>
                <Text style={{color: '#333', fontSize: 29, fontWeight: '600', color: '#fff', marginBottom: 9 }}>Hi {this.props.screenProps.username}!</Text>
                <View style={{borderBottomWidth: 2.125, borderBottomColor: '#7EB09B', width: 400}}></View>
                <TouchableHighlight style={styles.addFriends} onPress={()=>this.props.navigation.navigate('AddFriends')}>
                    <View>
                        <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#fff"}}> 
                            <Ionicons
                                name='ios-person-add'
                                size={32}
                                style={{ marginTop: 10, color: "#fff"}}
                            
                            />  Add Friends</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.friends} onPress={()=>this.props.navigation.navigate('MyFriends')}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#fff"}}>My Friends</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.logOut} onPress={()=>this.props.screenProps.logOut()}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'700', color: "#fff"}}>Log out</Text>
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
        backgroundColor: '#7EB09B',
        borderRadius: 10,
    },
    addFriends:{
        padding: 6,
        marginTop: 43,
        backgroundColor: '#7EB09B',
        borderRadius: 10,
        alignContent: 'flex-start',
    },
    friends:{
        padding:13,
        marginTop: 20,
        backgroundColor: '#7EB09B',
        borderRadius: 10,
        alignContent: 'flex-start',
    }
})







