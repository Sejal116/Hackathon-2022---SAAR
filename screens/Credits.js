import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fonts, titleShadow } from '../theme';

export default class Credits extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header navigation={this.props.navigation} title="Credits" />
          <View style={styles.outer}>
            <View style={styles.mid}>
              <View style={styles.inner}>
                <Text style={styles.logo}>eFF</Text>
              </View>
            </View>
          </View>
          <Text style={styles.label}>App</Text>
          <Text style={styles.names}>Sejal Gupta</Text>
          <Text style={styles.label}>Website</Text>
          <Text style={styles.names}>Aditya Sharma, Raj Kumar{'\n'}and Arjun Kulkarni</Text>
          <Text style={styles.label}>Achievement</Text>
          <Text style={styles.names}>1st Place, High School{'\n'}Synthacks Hackathon 2022</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy },
  content: { alignItems: 'center', paddingBottom: 40 },
  outer: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#9998BB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mid: {
    width: 146,
    height: 146,
    borderRadius: 73,
    backgroundColor: '#0A0A7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#4F93A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { fontFamily: fonts.title, fontSize: 30, color: colors.white, ...titleShadow },
  label: { fontFamily: fonts.script, fontSize: 30, color: colors.white, marginTop: 16 },
  names: {
    fontFamily: fonts.serif,
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 2,
  },
});
