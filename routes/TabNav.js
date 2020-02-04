import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';


import React from 'react'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ProfileStack from './ProfileStack'

import Header from './shared/Header.js'
import { Ionicons } from '@expo/vector-icons'

import Home from '../HomeScreen'
import About from '../About'
import Profile from '../Profile'
import AddFriends from '../AddFriends'
import MyFriends from '../MyFriends'


const HomeNav = createStackNavigator({
    Home: { screen: Home }
})
const ProfileNav = createStackNavigator({
    Profile: { screen: Profile },
    AddFriends:{screen: AddFriends},
    MyFriends:{screen: MyFriends},
})
const AboutNav = createStackNavigator({
    About: { screen: About }
})

const BottomNav = createBottomTabNavigator({
    Home: { 
        screen: HomeNav,
        navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-home'
              size={32}
              color={tintColor}
              
            />
            )
        }
    },
    Profile: { 
        screen: ProfileNav, 
        navigationOptions: {
            tabBarLabel:'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-person'
              size={32}
              color={tintColor}
              
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
              color={tintColor}

            />
            )
        }    
    }
}, {
    tabBarOptions: {
        activeTintColor: '#ff414e',
        inactiveTintColor: '#333', 
        showIcon: true,
        tabStyle: { margin: 2, top: 9 }
    }
})

const Tab =createAppContainer(BottomNav)


export default Tab

