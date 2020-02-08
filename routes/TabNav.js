import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Drawer from './Drawer'

import React from 'react'

import { Ionicons } from '@expo/vector-icons'

import Home from '../HomeScreen'
import About from '../About'
import Profile from '../Profile'
import AddFriends from '../AddFriends'
import MyFriends from '../MyFriends'


const HomeNav = createStackNavigator({
    Home: { screen: Home, navigationOptions: () => ({
        title: `Home`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#ffd700', fontSize: 19 },
        headerBackTitle: null
      }), }
})

const ProfileNav = createStackNavigator({
    Profile: { screen: Profile, navigationOptions: () => ({
        title: `Profile`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#ffd700', fontSize: 19 },
      }), },
    AddFriends:{screen: AddFriends, navigationOptions: () => ({
        title: `Add Friends`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#ffd700', fontSize: 19 },
        headerBackTitleStyle: { color: '#ffd700', fontSize: 17 }
      }),},
    MyFriends:{screen: MyFriends, navigationOptions: () => ({
        title: `My Friends`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#ffd700', fontSize: 19 },
        headerBackTitleStyle: { color: '#ffd700', fontSize: 17 }
      }),},
})

const AboutNav = createStackNavigator({
    About: { screen: About, navigationOptions: () => ({
        title: `About`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#ffd700', fontSize: 19 },
      }), }
})

const BottomNav = createBottomTabNavigator({
    Home: { 
        screen: HomeNav,
        navigationOptions: {
            tabBarLabel:'Home',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons
              name='ios-home'
              size={34}
              color={tintColor}
              style={{marginBottom: 10}}
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
              size={34}
              color={tintColor}
              style={{marginBottom: 10}}
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
              size={35}
              color={tintColor}
              style={{marginBottom: 10}}
            />
            )
        }    
    }
}, {
    tabBarOptions: {
        activeTintColor: '#ffd700',
        inactiveTintColor: '#fff', 
        showIcon: true,
        tabStyle: {backgroundColor: "#333", height: 100, borderTopWidth: 0.125, borderTopColor: "#fff"},

    }
})

const Tab = createAppContainer(BottomNav)


export default Tab

