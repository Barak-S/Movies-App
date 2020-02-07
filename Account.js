import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login'
import CreateAccount from './CreateAccount'


const Account = createStackNavigator({
    Login: { screen: Login },
    CreateAccount:{screen: CreateAccount}
})


const HandleLogin = createAppContainer(Account)


export default HandleLogin