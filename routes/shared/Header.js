import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Header({navigation, title}){

    const openMenu = ()=>{
        navigation.openDrawer()
    }
 
    return (
        <View style={styles.header}>
            <Ionicons
                name='md-menu'
                size={32}
                style={styles.menuIcon}
                onPress={openMenu}

            />
            <Text style={styles.headerText}>{ title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ff414e',
        letterSpacing: 1,
    },
    menuIcon:{
        zIndex: 9,
        position: 'absolute',
        top: 10,
        left: -60,
        color: '#ff414e'
    }
})
