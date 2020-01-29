import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../HomeScreen'
import Profile from '../Profile'
import About from '../About'
import Header from './shared/Header.js'
import React from 'react'


const screens= {
    About: {
        screen: About,
        navigationOptions:({ navigation })=>{
            return {
                headerTitle: ()=> <Header navigation ={navigation} title= '    About    '/>
            }
        }
    } 
}

const AboutStack = createStackNavigator(screens)


export default AboutStack