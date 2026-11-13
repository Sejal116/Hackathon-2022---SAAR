import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fonts } from '../theme';

// Sample timetable. Replace these with your own classes.
const SCHEDULE = [
  { day: 'Monday', classes: [
    { time: '09:00 - 10:50', title: 'Math', location: 'Classroom 403' },
    { time: '11:00 - 11:50', title: 'Physics', location: 'Lab 404' },
  ]},
  { day: 'Tuesday', classes: [
    { time: '09:00 - 10:50', title: 'Mandarin', location: 'Language Center' },
  ]},
  { day: 'Wednesday', classes: [
    { time: '09:00 - 10:50', title: 'Math', location: 'Classroom 403' },
    { time: '11:00 - 11:50', title: 'Physics', location: 'Lab 404' },
  ]},
  { day: 'Thursday', classes: [
    { time: '09:00 - 10:50', title: 'Club Activity', location: 'Activity Center' },
  ]},
  { day: 'Friday', classes: [
    { time: '09:00 - 10:50', title: 'Japanese', location: 'Language Center' },
    { time: '13:30 - 14:50', title: 'Club Activity', location: 'Activity Center' },
  ]},
  { day: 'Saturday', classes: [] },
  { day: 'Sunday', classes: [] },
];

export default class Planner extends Component {
  showClass = (c) => {
    Alert.alert(c.title, c.time + '\n' + c.location);
  };

  renderDay = (d, wide) => (
    <View key={d.day} style={[styles.card, wide && styles.wide]}>
      <Text style={styles.day}>{d.day}:</Text>
      <View style={styles.underline} />
      {d.classes.length === 0 ? (
        <Text style={styles.free}>Free day</Text>
      ) : (
        d.classes.map((c, i) => (
          <TouchableOpacity key={i} onPress={() => this.showClass(c)}>
            <Text style={styles.classTime}>{c.time}</Text>
            <Text style={styles.classTitle}>{c.title}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );

  render() {
    const weekdays = SCHEDULE.slice(0, 6);
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header navigation={this.props.navigation} title="Weekly Planner" />
          <View style={styles.grid}>
            {weekdays.map((d) => this.renderDay(d, false))}
          </View>
          <View style={styles.grid}>{this.renderDay(SCHEDULE[6], true)}</View>
          <View style={[styles.card, styles.wide, { marginHorizontal: 16 }]}>
            <Text style={styles.day}>Weekly Priorities:</Text>
            <View style={styles.underline} />
            <TextInput
              style={styles.input}
              multiline={true}
              placeholder="What matters most this week?"
              placeholderTextColor="#8A86B5"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy },
  content: { paddingBottom: 40 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: '48%',
    minHeight: 170,
    backgroundColor: colors.pink,
    padding: 10,
    marginBottom: 14,
  },
  wide: { width: '100%' },
  day: {
    fontFamily: fonts.script,
    fontSize: 30,
    color: colors.navy,
    textAlign: 'center',
  },
  underline: {
    height: 1,
    backgroundColor: colors.navy,
    marginHorizontal: 30,
    marginBottom: 8,
  },
  free: {
    fontFamily: fonts.serifMedium,
    fontSize: 14,
    color: '#8A86B5',
    textAlign: 'center',
    marginTop: 10,
  },
  classTime: {
    fontFamily: fonts.serifMedium,
    fontSize: 12,
    color: '#5B5890',
    marginTop: 6,
  },
  classTitle: {
    fontFamily: fonts.serif,
    fontSize: 16,
    color: colors.navy,
  },
  input: {
    minHeight: 90,
    fontFamily: fonts.serifMedium,
    fontSize: 16,
    color: colors.navy,
    textAlignVertical: 'top',
  },
});
