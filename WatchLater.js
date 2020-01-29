import React from 'react'
import { StyleSheet, Button, View, Text, TextInput, ScrollView, Image, TouchableHighlight, Modal, Dimensions, TouchableHighlightBase } from 'react-native';
import MovieCard from './MovieCard'

export default class WatchLater extends React.Component{

    render(){

        let view;
        if (this.props.watchLater.length===0){
            view=null
        } else {
            view= <View style={styles.container}>
            <ScrollView style={styles.results}>
                {this.props.watchLater.map(movie=> (
                    <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onPress={this.props.popUp}
                    />)
                )}
                <View style={{height: 110}}></View>
            </ScrollView>
        </View>
        }
        return (
            <View>
                <Text style={{fontSize: 32, color: '#fff',textAlign: "center", fontWeight: '600'}}>Your Watch Later</Text>
                {view}
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
    results: {
        flex: 1,
    },
})