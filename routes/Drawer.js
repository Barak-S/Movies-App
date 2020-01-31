import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import React from 'react'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ProfileStack from './ProfileStack'

import Header from './shared/Header.js'

import Home from '../HomeScreen'
import About from '../About'
import Profile from '../Profile'



const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile:{
        screen: ProfileStack
    },
    About: {
        screen: AboutStack
    }
    
})


export default createAppContainer(RootDrawerNavigator)

