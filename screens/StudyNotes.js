import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';

export default class StudyNotes extends React.Component {
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
        <Text style={styles.head}>My Notes</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Type your notes here"
        />
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
    marginBottom: 10,
  },
  input: {
    width: '90%',
    height: 400,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
    textAlignVertical: 'top',
    backgroundColor: '#e8e8e8',
    fontSize: 20,
  },
});
