import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, SafeAreaView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';


export default class Menu extends React.Component {
    render(){
        return (
            <View>
                <Text style={styles.container}>Menu</Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    }
})