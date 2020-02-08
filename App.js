import React from 'react';
import Navigator from './routes/Drawer'
import BottomNav from './routes/TabNav'
import Account from './Account';

export default class App extends React.Component {

  state={
    loggedIn: false,
    username: '',
    password: '',
    userId: {},
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
    if(this.state.username === "" || this.state.password ===""){
      null
    } else{
      fetch("http://localhost:3000/users/",{
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
      null
    } else{
      fetch("http://localhost:3000/users/find_my_account",{
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
    fetch(`http://localhost:3000/users/${this.state.userId}`,{
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
    
    let view;
    this.state.loggedIn ? view=<BottomNav screenProps={{userId: this.state.userId, 
                                                        logOut: this.logOut, 
                                                        username: this.state.username,
                                                        deleteAcc: this.deleteAcc}}/> 
                                                        : 
                                                        view=<Account 
                                                        screenProps={{
                                                          handleLoginSubmit: this.handleLoginSubmit,
                                                          handleCreateAccountSubmit: this.handleCreateAccountSubmit,
                                                          handleUsername: this.handleUsername,
                                                          handlePassword: this.handlePassword}}
                                                        />

    return (

      view
      
      )
    }
      
  }

  