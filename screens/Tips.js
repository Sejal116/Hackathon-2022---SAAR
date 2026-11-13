import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

const TIPS = [
  'Study smarter, not harder',
  'Create mind maps about the topic you are learning',
  'Clear your desk and clean your room to remove any distractions',
  'Take notes from your textbook and lecture notes',
  'Plan your schedule',
  'Spaced repetition',
  'Listen to low volume classical music or any music that helps you study',
  'Study before bed',
  'Use the Pomodoro technique',
  'The PQ4R technique',
];

export default class Tips extends React.Component {
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
        <Text style={styles.head}>Top Ten Tips!</Text>
        <ScrollView contentContainerStyle={styles.list}>
          {TIPS.map((tip, i) => (
            <Text key={i} style={styles.textstyle}>
              #{i + 1} - {tip}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  textstyle: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20,
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
});
