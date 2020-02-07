import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import CreateAccount from './CreateAccount'


const Account = createStackNavigator({
    Login: { screen: Login, navigationOptions: () => ({
        title: `Log In`,
        headerTitleStyle: { color: '#ff414e', fontSize: 19 },
    }), },
    CreateAccount:{screen: CreateAccount, navigationOptions: () => ({
        title: `Create Account`,
        headerTitleStyle: { color: '#ff414e', fontSize: 19 },
        headerBackTitleStyle: { color: '#ff414e', fontSize: 17 }
    }),}
})


const HandleLogin = createAppContainer(Account)


export default HandleLogin