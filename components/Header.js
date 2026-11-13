import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fonts, titleShadow } from '../theme';

// Back button and page title used at the top of every screen except Home.
export default function Header({ navigation, title }) {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.back}>{'‹'} Home</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: 44,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  back: {
    fontFamily: fonts.script,
    fontSize: 26,
    color: colors.white,
  },
  title: {
    fontFamily: fonts.title,
    fontSize: 38,
    color: colors.white,
    textAlign: 'center',
    marginTop: 4,
    ...titleShadow,
  },
});
