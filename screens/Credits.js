import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Credits extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Image
            style={styles.back}
            source={require('../assets/backButton.png')}
          />
        </TouchableOpacity>
        <Text style={styles.head}>Credits</Text>
        <Text style={styles.line}>App: Sejal Gupta and Arjun Kulkarni</Text>
        <Text style={styles.line}>Website: Aditya Sharma and Raj Kumar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  back: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 10,
    marginBottom: 28,
  },
  head: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'lightpink',
    marginBottom: 20,
  },
  line: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
