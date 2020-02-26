import React from 'react';
import Navigator from './routes/Drawer'
import BottomNav from './routes/TabNav'
import Account from './Account';

const serverURL = 'http://2f7e7e82.ngrok.io'
// in APP, HOMESCREEN, MYFRIENDS, ADDFRIENDS
// ./ngrok http 3000 -host-header="localhost:3000" command to run in terminal to load up ngrok server
// Real project
export default class App extends React.Component {

  state={
    loggedIn: false,
    username: '',
    password: '',
    userId: {},
    error: ''
  }

  handleUsername= text => {
    this.setState({
      username: text
    })
  }

  handlePassword= text => {
      this.setState({
        password: text
      })
  }

  handleCreateAccountSubmit=()=>{
    if(this.state.username === "" || this.state.password === ""){
      this.setState({error: 'error'})
    } else{
      fetch(`${serverURL}/users/`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(resp=>resp.json())
      .then(data=> 
        this.setState({
          loggedIn: true,
          userId: data.id
        })
      )
    }
  }

  handleLoginSubmit=()=>{
    if(this.state.username === "" || this.state.password ===""){
      this.setState({error: 'error'})
    } else{
      fetch(`${serverURL}/users/find_my_account`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then(resp=>resp.json())
      .then(data=> 
        this.setState({
          loggedIn: true,
          userId: data.id
        })
      )
    }
  }

  logOut=()=>{
    this.setState({
      loggedIn: false,
      userId: {},
      username: '',
      password: ''
    })
  }


  deleteAcc=()=>{
    fetch(`${serverURL}/users/${this.state.userId}`,{
      method: 'DELETE'
    })
    this.setState({
      loggedIn: false,
      userId: {},
      username: '',
      password: ''
    })
  }
  
  
  render() {

    console.disableYellowBox = true
    
    let view;
    this.state.loggedIn ? 
    view=<BottomNav 
        screenProps={{userId: this.state.userId, 
          logOut: this.logOut, 
          username: this.state.username,
          deleteAcc: this.deleteAcc}}/> 
          : 
    view=<Account 
        screenProps={{
          handleLoginSubmit: this.handleLoginSubmit,
          handleCreateAccountSubmit: this.handleCreateAccountSubmit,
          handleUsername: this.handleUsername,
          handlePassword: this.handlePassword,
          error: this.state.error}}
        />

    return (

      view
      
      )
    }
      
  }

  