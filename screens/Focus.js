import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Focus extends React.Component {
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
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginBottom: 15,
    fontWeight: 'bold',
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    color:'red',
    marginBottom: 40,
    backgroundColor: '#ffff00',
    marginTop: -30
  },
});
