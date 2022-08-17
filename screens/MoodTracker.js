import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class MoodTracker extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        <Text style={styles.head}>
        credits for app: Sejal Gupta and Arjun Kulkarni
        </Text>
        <Text style={styles.head}>
          credits for website: Aditya Sharma and Raj Kumar
        </Text>
        <Text style={styles.textStyle}>
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  },

  img: {
    marginLeft:10,
    width: 290,
    height: 150,
   
  },
  
  text: {
    fontSize: 20,
    color: 'yellow',
    marginBottom: 15,
    fontWeight: 'bold',
    backgroundColor: 'blue'
},

  head: {
    textAlign: 'center',
    fontSize: 50,
    color:'black',
    fontWeight: 'bold',
    backgroundColor: "lightpink",
    marginBottom: 10,
    marginTop: -30
  },
});

