import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native';
import { colors, fonts, titleShadow } from '../theme';

const ITEMS = [
  { label: 'Planner', screen: 'Planner', circle: colors.cream },
  { label: 'Study Notes', screen: 'StudyNotes', circle: colors.rose },
  { label: 'Focus', screen: 'Focus', circle: colors.salmon },
  { label: 'Tips', screen: 'Tips', circle: colors.cream },
  { label: 'Credits', screen: 'Credits', circle: colors.rose },
];

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.titleText}>eFFiciency</Text>
          <Text style={styles.subtitle}>The Ultimate Student Planner</Text>
          <Text style={styles.index}>INDEX</Text>
          {ITEMS.map((item) => (
            <TouchableOpacity
              key={item.screen}
              style={styles.row}
              onPress={() => this.props.navigation.navigate(item.screen)}>
              <View style={[styles.circle, { backgroundColor: item.circle }]} />
              <View style={styles.bar}>
                <Text style={styles.barText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.navy,
  },
  content: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
  },
  titleText: {
    fontFamily: fonts.title,
    fontSize: 54,
    color: colors.white,
    ...titleShadow,
  },
  subtitle: {
    fontFamily: fonts.script,
    fontSize: 26,
    color: colors.white,
    marginTop: 4,
  },
  index: {
    fontFamily: fonts.title,
    fontSize: 30,
    color: colors.white,
    marginTop: 26,
    marginBottom: 22,
    ...titleShadow,
  },
  row: {
    width: 300,
    height: 90,
    justifyContent: 'center',
    marginBottom: 14,
  },
  circle: {
    position: 'absolute',
    alignSelf: 'center',
    width: 86,
    height: 86,
    borderRadius: 43,
  },
  bar: {
    height: 52,
    backgroundColor: '#000000',
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barText: {
    fontFamily: fonts.script,
    fontSize: 32,
    color: '#DDDDDD',
  },
});
