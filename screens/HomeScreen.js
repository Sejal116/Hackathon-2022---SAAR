import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default class HomeScreen extends React.Component {
  changeScreen = (screen)  => {
    this.props.navigation.navigate(screen);
  }
  render() {
    
    return(

           <View style = {styles.app}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>eFFiciency</Text>
                        <Text style={styles.titleText}></Text>
          </View>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('MoodTracker')}}>
          <Text style = {styles.textStyle}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Focus')}}>
          <Text style = {styles.textStyle}>Focus</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Planner')}}>
          <Text style = {styles.textStyle}>Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('StudyNotes')}}>
          <Text style = {styles.textStyle}>Study Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => {this.changeScreen('Tips')}}>
          <Text style = {styles.textStyle}>Tips</Text>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "white"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
        titleText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "black",
        marginTop:50,
        marginBottom: 20
    },
  buttonStyle: {
    borderWidth: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 40,
    borderRadius: 80,
    marginBottom: 40, 
  },
  textStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#D11583',
        justifyContent: "center",
        alignItems: "center"
    },

    rate: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'times'
    },

  image1: {
    width: 50,
    height: 50,
    marginTop: -35,
    marginLeft: 100,
    marginRight:-30
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: -90
  },
     backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
});