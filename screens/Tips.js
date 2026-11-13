import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fonts } from '../theme';

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
        <ScrollView contentContainerStyle={styles.content}>
          <Header navigation={this.props.navigation} title="Top Ten Tips!" />
          {TIPS.map((tip, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.number}>#{i + 1}</Text>
              <Text style={styles.tip}>{tip}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy },
  content: { paddingBottom: 40 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.pink,
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  number: {
    fontFamily: fonts.script,
    fontSize: 34,
    color: colors.navy,
    width: 58,
  },
  tip: {
    flex: 1,
    fontFamily: fonts.serif,
    fontSize: 16,
    color: colors.navy,
  },
});
