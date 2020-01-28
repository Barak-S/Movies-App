import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Image, ScrollView } from 'react-native';

// import StyleSheet from react-native when using StyleSheet.create() to define several style in one place

export default class MovieCard extends Component {

  styles = StyleSheet.create({
    result:{
      flex: 1,
      width: '100%',
      marginBottom: 20
    },
    heading: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
      padding: 20,
      backgroundColor: '#ff414e'
    }
  })

  render() {
    return (

      <TouchableHighlight key = {this.props.key} onPress={()=> this.props.onPress(this.props.movie.imdbID)}>
        <View style={this.styles.result}>
          <Image
            source={{uri: this.props.movie.Poster}}
            style={{width: '100%', height: 450}}
            resizeMode= "cover"
          />
          <Text style={this.styles.heading}>{this.props.movie.Title}</Text>
        </View>
      </TouchableHighlight>)

    

  }
}