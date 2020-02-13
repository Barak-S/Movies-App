import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import CreateAccount from './CreateAccount'


const Account = createStackNavigator({
    Login: { screen: Login, navigationOptions: () => ({
        title: `Log In`,
        headerStyle: {
            backgroundColor: '#7EB09B',
          },
        headerTitleStyle: { color: '#fff', fontSize: 21 },
    }), },
    CreateAccount:{screen: CreateAccount, navigationOptions: () => ({
        title: `Create Account`,
        headerStyle: {
            backgroundColor: '#7EB09B',
          },
        headerTitleStyle: { color: '#fff', fontSize: 21 },
        headerBackTitleStyle: { color: '#ff414e', fontSize: 19 },
        headerTintColor: '#ff414e'
    }),}
})


const HandleLogin = createAppContainer(Account)


export default HandleLogin