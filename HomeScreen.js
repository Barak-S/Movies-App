import React from 'react';
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';
import MovieCard from './MovieCard'
import Menu from './Menu'
import MenuButton from './MenuButton'


const apiUrl = "http://www.omdbapi.com/?apikey=a0514b1a"

export default class HomeScreen extends React.Component {

static navigationOptions = {
    title: 'MoviSearch',
    headerStyle: {
        backgroundColor: '#ffde22',
    },
    headerTintColor: '#ff414e',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25
    },
    headerLeft: () => (
        <MenuButton
            
        />
        ),
    };

  state={
    searchTerm: 'Enter a Movie...',
    movies: [],
    selectedMovie: {},
    menu: false
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

  toggleMenu=()=>{
      this.setState({
          menu: !this.state.menu
      })
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
        <ScrollView style={styles.results}>
          {this.state.movies.map(movie=> (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onPress={this.openPopup}
            />)
          )}
          {this.state.movies.length === 0 ? null : 
            <TouchableHighlight
            style={styles.backButton}
            onPress={()=> this.setState({ movies: [] })}
          >
            <Text style={styles.backButton}>Home</Text>
          </TouchableHighlight>
          
          }
          

        </ScrollView>
        <Modal 
          style={styles.modal}
          animationType= "slide"
          transparent={false}
          visible={(typeof this.state.selectedMovie.Title != "undefined") ? true : false}
        >
          <ScrollView>
          <View style={styles.popup}>
            <Text style={styles.popTitle}>{this.state.selectedMovie.Title}</Text>
            <Text style={{color: "#445565", fontSize: 20 }}>Rating: {this.state.selectedMovie.imdbRating}</Text>

            <Image
              source={{uri: this.state.selectedMovie.Poster}}
              style={{width: '100%', height: 465, marginTop: 49}}
              resizeMode= "cover"
            />
            <Text style={{color: "#445565", fontSize: 18, fontWeight: '400', marginTop: 20}}>{this.state.selectedMovie.Plot}</Text>
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
      backgroundColor: '#ffde22',
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
    },
    backButton:{
      width: '100%',
      height: 45,
      fontSize: 24,
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#ff414e'
    }

  })