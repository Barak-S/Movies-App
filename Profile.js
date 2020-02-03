import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'



export default class Profile extends React.Component{



    render(){

        // console.log(this.props.screenProps.userId)

        return(
            <View style={styles.container}>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: '600' }}>Barak Saidoff</Text>
                <Text style={{color: '#fff',marginTop:30, fontSize: 17, fontWeight: '600' }}>Add Friends</Text>
                <Ionicons
                name='ios-person-add'
                size={32}
                style={{ marginTop: 10, color: "#fff"}}
                onPress={() => this.props.navigation.navigate('AddFriends')}
                
            
                />
                <Text style={{color: '#fff',marginTop:350, fontSize: 21, fontWeight: '600' }} onPress={()=>this.props.screenProps.logOut()}>Log out</Text>


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
      paddingTop: 45,

    }
})







