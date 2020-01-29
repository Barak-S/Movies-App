import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'
import React from 'react'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import ProfileStack from './ProfileStack'

import Profile from '../Profile'
import Header from './shared/Header.js'




const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile:{
        screen: ProfileStack
    },
    About: {
        screen: AboutStack,
    },
})


export default createAppContainer(RootDrawerNavigator)

// ,
//     Profile:{
//         screen: Profile,
//         navigationOptions:({ navigation })=>{
//             return {
//                 headerTitle: ()=> <Header navigation ={navigation} title= '   Profile   '/>
//             }
//         }
//     }