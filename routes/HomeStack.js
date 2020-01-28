import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../HomeScreen'
import Menu from '../Menu'
import Profile from '../Profile'

const screens= {
    Home: {
        screen: HomeScreen
    },
    Menu: {
        screen: Menu
    },
    Profile:{
        screen: Profile
    }
}

const HomeStack = createStackNavigator(screens)


export default createAppContainer(HomeStack)