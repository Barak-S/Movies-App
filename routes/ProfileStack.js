import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen'
import Profile from '../Profile'
import About from '../About'
import Header from './shared/Header.js'
import React from 'react'


const screens= {
    
    Profile: {
        screen: Profile,
        navigationOptions:({ navigation })=>{
            return {
                headerTitle: ()=> <Header navigation ={navigation} title= '    Profile    '/>
            }
        }
    }
    
}

const ProfileStack = createStackNavigator(screens)


export default ProfileStack