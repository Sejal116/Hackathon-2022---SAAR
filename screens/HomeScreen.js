import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  changeScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <View style={styles.app}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>eFFiciency</Text>
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.changeScreen('Credits')}>
          <Text style={styles.textStyle}>Credits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.changeScreen('Focus')}>
          <Text style={styles.textStyle}>Focus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.changeScreen('Planner')}>
          <Text style={styles.textStyle}>Planner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.changeScreen('StudyNotes')}>
          <Text style={styles.textStyle}>Study Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.changeScreen('Tips')}>
          <Text style={styles.textStyle}>Tips</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    marginBottom: 20,
  },
  buttonStyle: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 40,
    borderRadius: 80,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D11583',
  },
});
