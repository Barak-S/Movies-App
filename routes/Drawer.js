import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import React from 'react'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import Profile from '../Profile'


const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
})


export default createAppContainer(RootDrawerNavigator)