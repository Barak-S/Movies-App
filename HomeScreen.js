import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import MovieCard from './MovieCard'
import watchLater from './WatchLater'
import WatchLater from './WatchLater';


const apiUrl = "http://www.omdbapi.com/?apikey=a0514b1a"

export default class HomeScreen extends React.Component {



  state={
    searchTerm: 'Enter a Movie...',
    movies: [],
    selectedMovie: {},
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

  openPopup = id => {
    fetch(apiUrl+ "&i=" + id)
    .then(resp=>resp.json())
    .then(data=> {
      this.setState({
        selectedMovie: data
      })
    })
  }

  watchLater=(movie)=>{
    this.setState({
        watchLater: [...this.state.watchLater, movie]
    },()=>console.log(this.state.watchLater))
  }

  
  render() {

    let view;
    if(this.state.movies.length === 0){
        view = <WatchLater watchLater={this.state.watchLater} popUp={this.openPopup}/>
    } else {
        view = <View style={styles.container}>
                <ScrollView style={styles.results}>

                {this.state.movies.map(movie=> (
                    <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onPress={this.openPopup}
                    />)
                )}
                 <View>
                    <TouchableHighlight
                    
                    onPress={()=> this.setState({ movies: [] })}
                >
                    <Text style={styles.closeBtn}>Home</Text>
                </TouchableHighlight>
                </View>
                <View style={{height: 110}}></View>

            </ScrollView>
        </View>
    }
    
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.searchBox}
            placeholder={this.state.searchTerm}
            onChangeText={(text)=> this.handleChange(text)}
            onSubmitEditing={this.handleSubmit}
            />

            <View>{view}</View>
            <Modal 
            style={styles.modal}
            animationType= "slide"
            transparent={false}
            visible={(typeof this.state.selectedMovie.Title != "undefined") ? true : false}
            >
            <ScrollView>
            <View style={styles.popup}>
                <Text style={styles.popTitle}>{this.state.selectedMovie.Title}</Text>
                <Text style={{color: "#fff", fontSize: 20 }}>Rating: {this.state.selectedMovie.imdbRating}</Text>

                <Image
                source={{uri: this.state.selectedMovie.Poster}}
                style={{width: '100%', height: 465, marginTop: 49}}
                resizeMode= "cover"
                />
                <Text style={{color: "#fff", fontSize: 18, fontWeight: '400', marginTop: 20}}>{this.state.selectedMovie.Plot}</Text>
    
                <TouchableHighlight onPress={()=>this.watchLater(this.state.selectedMovie)} style={styles.watchLater}>
                    <Text style={{textAlign: "center", fontSize: 19, fontWeight:'500', color: "#fff"}}>Watch Later</Text>
                </TouchableHighlight>

            </View>
            </ScrollView>
            <TouchableHighlight
                onPress={()=> this.setState({ selectedMovie : {}, searchTerm: '' })}
            >
                <Text style={styles.closeBtn}>Close</Text>
            </TouchableHighlight>

            </Modal>
        
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