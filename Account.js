import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import CreateAccount from './CreateAccount'


const Account = createStackNavigator({
    Login: { screen: Login, navigationOptions: () => ({
        title: `Log In`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#A5DB55', fontSize: 19 },
    }), },
    CreateAccount:{screen: CreateAccount, navigationOptions: () => ({
        title: `Create Account`,
        headerStyle: {
            backgroundColor: '#333',
          },
        headerTitleStyle: { color: '#A5DB55', fontSize: 19 },
        headerBackTitleStyle: { color: '#A5DB55', fontSize: 17 }
    }),}
})


const HandleLogin = createAppContainer(Account)


export default HandleLogin