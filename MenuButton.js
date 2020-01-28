import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from 'react-navigation-drawer';
import { createDrawerNavigator, DrawerItems, RouteConfigs, DrawerNavigatorConfig } from 'react-navigation-drawer';
import Menu from './Menu'


export default function MenuButton({ navigation }) {

    

    return(
        <View>
            <Ionicons
                name='md-menu'
                color="#000000"
                size={32}
                style={styles.menuIcon}

            />

        </View>
        
        
        
        
        
    )
    }


const styles = StyleSheet.create({
    menuIcon:{
        zIndex: 9,
        position: 'absolute',
        top: 10,
        left: 20,
        color: '#ff414e'
    }
})

