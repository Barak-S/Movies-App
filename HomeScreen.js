import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import WatchLater from './WatchLater';
import MovieContainer from './MoviesContainer'
import { Ionicons } from '@expo/vector-icons'

import Header from './routes/shared/Header'




const apiUrl = "http://www.omdbapi.com/?apikey=a0514b1a"

export default class HomeScreen extends React.Component {



  state={
    searchTerm: 'Enter a Movie...',
    movies: [],
    watchLater: []
  }


  handleSubmit =()=> {
    fetch(`${apiUrl}&s=${this.state.searchTerm.split(" ").join("&")}`)
    .then(resp=>resp.json())
    .then(data => {
      this.setState({
        movies: data.Search
      })
    })
  }

  handleChange = text => {
    this.setState({
      searchTerm: text
    })
  }

  watchLater=(movie)=>{
    this.setState({
        watchLater: [...this.state.watchLater, movie]
    },()=>(
      fetch('http://localhost:3000/movies',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Title: movie.Title, Poster: movie.Poster, imdbRating: movie.imdbRating, Plot: movie.Plot, imdbID: movie.imdbID   })
      }).then(resp=>resp.json())
      .then(data=>       
          fetch("http://localhost:3000/watch_laters",{
            method:"POST",
            headers: {
              'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: this.props.screenProps.userId, movie_id: data.id})
          }).then(resp=> resp.json())
          .then(data=>console.log(data))
        )
    ))

  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${this.props.screenProps.userId}`)
    .then(resp=>resp.json())
    .then(data=> this.setState({
      watchLater: data.movies
    }))
  }


  //fetch delete from backend and remove from state

  removeFromWatchLater=(movie ,id)=> {
    fetch("http://localhost:3000/watch_laters/find_and_delete",{
      method:"POST",
            headers: {
              'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({movie: movie, user_id:id})
            
    })
    .then(resp=>resp.json())
    .then(movies=> this.setState({
      watchLater: movies
    }))
      // let foundMovie = this.state.watchLater.find(element => element.id === movie.id)
      // console.log("deleting", foundMovie)
      // let newArray = this.state.watchLater.filter(element => element.imdbID !== foundMovie.imdbID)
      
      // // need to get watch later ID
      // fetch('http://localhost:3000/watch_laters/',{
      //   method: "DELETE",
      //   body: JSON.stringify({ user_id: this.props.screenProps.userId, movie_id: foundMovie.imdbID })
      // }).then(resp=> resp.json())
      // .then(data=>console.log(foundMovie))
  
  }

  clearMovies=()=> {
    this.setState({ movies: [] })
  }
  
  render() {

    return (
      
        <View style={styles.container}>

            <TextInput
            style={styles.searchBox}
            placeholder={this.state.searchTerm}
            onChangeText={(text)=> this.handleChange(text)}
            onSubmitEditing={this.handleSubmit}
            />
            {this.state.movies.length !== 0 ?
            <View>
            <Ionicons
              name='ios-arrow-dropleft'
              size={32}
              style={styles.homeIcon}
              onPress={()=> this.clearMovies()}

            />
            <MovieContainer
                movies={this.state.movies}
                clearMovies={this.clearMovies}
                watchLater={this.watchLater}
                userId={this.props.screenProps.userId}

            />
            </View>
                :
            <WatchLater
                watchLater={this.state.watchLater}
                remove={this.removeFromWatchLater}
                userId={this.props.screenProps.userId}
                
            />
            }
        </View> 
      )
    }
      
  }


  const styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#333',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 24
    },
    title: {
      color: '#ff414e',
      fontWeight: '700',
      fontSize: 32,
      textAlign: "center",
      marginBottom: 20
    },
    searchBox:{
      fontSize: 21,
      padding: 20,
      marginTop: 10,
      width: '92%',
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 24
    },
    results: {
      flex: 1,
    },
    popup: {
      padding: 50,
      backgroundColor: '#333',
      flex:1,
    },
    popTitle:{
      fontSize: 29,
      fontWeight: '600',
      color: '#ff414e',
    },
    closeBtn:{
      padding: 20,
      fontSize: 24,
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#ff414e'
    },
    backButton:{
      width: '100%',
      height: 45,
      backgroundColor: '#ff414e'
    },
    watchLater:{
        padding: 15,
        margin: 30,
        backgroundColor: '#ff414e',
        borderRadius: 10,
    },
    homeIcon:{
      zIndex: 9,
      position: 'absolute',
      color: '#ff414e',
  },

  })