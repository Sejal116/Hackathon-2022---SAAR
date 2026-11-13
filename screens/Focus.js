import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Focus extends React.Component {
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
        <Text style={styles.head}>Focus</Text>
        <Text style={styles.textStyle}>Pomodoro timer coming soon.</Text>
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
    fontWeight: 'bold',
    backgroundColor: 'lightpink',
    marginBottom: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
