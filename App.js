  
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';

import Navigator from './routes/Drawer'
import Login from './Login'

import BottomNav from './routes/TabNav'



export default class App extends React.Component {

  state={
    loggedIn: false,
    username: '',
    password: '',
    userId: {}
  }

  // actual IOS device fetches to https which doesnt work for login

  // passing this.state.userId to BottomNav so that I can pass those props to other rednered components

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

  handleSubmit=()=>{
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

  logOut=()=>{
    this.setState({
      loggedIn: false,
      userId: {},
      username: '',
      password: ''
    })
  }
  
  
  render() {
    
    let view;
    this.state.loggedIn ? view=<BottomNav screenProps={{userId: this.state.userId, logOut: this.logOut}}/> : view=<Login handleSubmit={this.handleSubmit} handleUsername={this.handleUsername} handlePassword={this.handlePassword}/>

    return (

      view
      
      )
    }
      
  }

  