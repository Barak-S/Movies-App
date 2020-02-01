import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'


export default class Profile extends React.Component{



    render(){

        console.log(this.props.userId)

        return(
            <View style={styles.container}>
                <Text style={{color: '#fff', fontSize: 24, fontWeight: '600' }}>Barak Saidoff</Text>
                <Text style={{color: '#fff',marginTop:30, fontSize: 17, fontWeight: '600' }}>Add Friends</Text>
                <Ionicons
                name='ios-person-add'
                size={32}
                style={{ marginTop: 10, color: "#fff"}}
                onPress={()=>{}} // render search bar to search users}
                
                // create component with search bar that fetches to "http://localhost:3000/users"
                // create a profileCard component that renders each profile to screen.
                // onclick=> modal with contact
                // in modal - button to follow - onclick adds to users followers in back end

                />
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







