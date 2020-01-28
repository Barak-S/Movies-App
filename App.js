  
import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MovieCard from './MovieCard'

const apiUrl = "http://www.omdbapi.com/?apikey=a0514b1a"
// const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=c052d8400da4e25a04e8addd19e33290'

export default class App extends React.Component {

  state={
    searchTerm: 'Enter a Movie...',
    movies: [],
    selectedMovie: {}
  }

  handleSubmit=()=>{

    fetch(`${apiUrl}&s=${this.state.searchTerm.split(" ").join("&")}`)
    .then(resp=>resp.json())
    .then(data => {
      this.setState({
        movies: data.Search
      })
    })
  }

  openPopup = id =>{
    fetch(apiUrl+ "&i=" + id)
    .then(resp=>resp.json())
    .then(data=> {
      this.setState({
        selectedMovie: data
      },()=>console.log(this.state.selectedMovie))
    })
  }

  styles= StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#ffde22',
      alignItems: "center",
      justifyContent: 'flex-start',
      paddingTop: 65
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
      backgroundColor: '#ffde22',
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
    }

  })
  
  render() {
    return (
      <View style={this.styles.container}>
        <Text style ={this.styles.title}>MoviSearch</Text>
        <TextInput
          style={this.styles.searchBox}
          placeholder={this.state.searchTerm}
          onChangeText={text=> this.setState({searchTerm: text})}
          onSubmitEditing={this.handleSubmit}
        />
        <ScrollView style={this.styles.results}>
          {this.state.movies.map(movie=> (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onPress={this.openPopup}
            />)
          )}

        </ScrollView>
        <Modal 
          style={this.styles.modal}
          animationType= "slide"
          transparent={false}
          visible={(typeof this.state.selectedMovie.Title != "undefined") ? true : false}
        >
          <ScrollView>
          <View style={this.styles.popup}>
            <Text style={this.styles.popTitle}>{this.state.selectedMovie.Title}</Text>
            <Text style={{color: "#445565", fontSize: 20 }}>Rating: {this.state.selectedMovie.imdbRating}</Text>

            <Image
              source={{uri: this.state.selectedMovie.Poster}}
              style={{width: '100%', height: 465, marginTop: 49}}
              resizeMode= "cover"
            />
            <Text style={{color: "#445565", fontSize: 18, fontWeight: '450', marginTop: 20}}>{this.state.selectedMovie.Plot}</Text>
          </View>
          </ScrollView>
          <TouchableHighlight
            onPress={()=> this.setState({ selectedMovie : {} })}
          >
            <Text style={this.styles.closeBtn}>Close</Text>
          </TouchableHighlight>

        </Modal>
        
      </View> 
    )
  }

  
}