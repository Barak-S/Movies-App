import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import MovieCard from './MovieCard'
import WatchLater from './WatchLater';
import MovieContainer from './MoviesContainer'


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
    })
  }

  removeFromWatchLater=(movie)=> {
      let foundMovie = this.state.watchLater.find(element => element.imdbID = movie.imdbID)
    //   console.log("removing",foundMovie)
      let newArray = this.state.watchLater.filter(element => element.imdbID !== foundMovie.imdbID)
    this.setState({
        watchLater: newArray
    })
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
            <MovieContainer
                movies={this.state.movies}
                clearMovies={this.clearMovies}
                watchLater={this.watchLater}
            />
                :
            <WatchLater
                watchLater={this.state.watchLater}
                remove={this.removeFromWatchLater}
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
      width: '92%',
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 40
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
    }

  })