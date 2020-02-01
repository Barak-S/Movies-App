import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ProfileStack from './ProfileStack'

import Header from './shared/Header.js'
import { Ionicons } from '@expo/vector-icons'

import Home from '../HomeScreen'
import About from '../About'
import Profile from '../Profile'


const HomeNav = createStackNavigator({
    Home: { screen: Home }
})
const ProfileNav = createStackNavigator({
    Profile: { screen: Profile }
})
const AboutNav = createStackNavigator({
    About: { screen: About }
})

const BottomNav = createBottomTabNavigator({
    Profile: { 
        screen: ProfileNav, 
        navigationOptions: {
            tabBarLabel:'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-person'
              size={32}
              
              

            />
            )
        }
    },
    Home: { 
        screen: HomeNav,
        navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-home'
              size={32}
            
              

            />
            )
        } 
    },
    About: { 
        screen: AboutNav,
        navigationOptions: {
            tabBarLabel:'About',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-menu'
              size={32}
              
              

            />
            )
        }    
    }
}, {
    tabBarOptions: {
        activeTintColor: '#6558F5',
        inactiveTintColor: '#788896', 
        showIcon: true,
        tabStyle: { margin: 3, top: 9 }
    }
})

const Tab =createAppContainer(BottomNav)


export default Tab

