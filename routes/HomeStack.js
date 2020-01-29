import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../HomeScreen'
import Menu from '../Menu'
import Profile from '../Profile'
import React from 'react'
import Header from './shared/Header.js'


const screens= {
    Home: {
        screen: HomeScreen,
        navigationOptions:({ navigation })=>{
            return {
                headerTitle: ()=> <Header navigation ={navigation} title= "MoviSearch"/>
            }
        }
    }
}

const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack)