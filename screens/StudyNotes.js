import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fonts } from '../theme';

// Essay planner page: type your plan into each box.
export default class StudyNotes extends React.Component {
  pill(label, placeholder) {
    return (
      <View style={styles.pill}>
        <Text style={styles.pillLabel}>{label}</Text>
        <TextInput style={styles.pillInput} placeholder={placeholder} placeholderTextColor="#9A98B8" />
      </View>
    );
  }

  box(label, style, inputStyle) {
    return (
      <View style={style}>
        <Text style={styles.script}>{label}</Text>
        <TextInput style={inputStyle || styles.boxInput} multiline={true} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Header navigation={this.props.navigation} title="Study Notes" />
          <View style={styles.top}>
            <View style={styles.topLeft}>
              {this.pill('SUBJECT:', '')}
              {this.pill('WORD COUNT:', '')}
              {this.pill('DUE DATE:', 'dd / mm / yy')}
            </View>
            {this.box('Key Points:', [styles.blue, styles.keyPoints])}
          </View>

          <View style={styles.titleRow}>
            <Text style={styles.titleTag}>TITLE:</Text>
            <TextInput style={styles.titleInput} />
          </View>

          {this.box('Introduction:', [styles.blue, styles.full])}

          <View style={styles.paras}>
            {['PARA 1', 'PARA 2', 'PARA 3'].map((p) => (
              <View key={p} style={styles.para}>
                <Text style={styles.paraTag}>{p}</Text>
                <TextInput style={styles.paraInput} multiline={true} />
              </View>
            ))}
          </View>

          {this.box('Conclusion:', [styles.blue, styles.full])}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy },
  content: { paddingBottom: 40 },
  top: { flexDirection: 'row', paddingHorizontal: 12 },
  topLeft: { flex: 1, marginRight: 8 },
  pill: {
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 14,
    marginBottom: 8,
    justifyContent: 'center',
  },
  pillLabel: { fontFamily: fonts.serif, fontSize: 11, color: colors.navyDark },
  pillInput: { fontFamily: fonts.serifMedium, fontSize: 14, color: colors.navyDark, padding: 0 },
  blue: {
    backgroundColor: colors.blueGrey,
    borderWidth: 1,
    borderColor: colors.navyDark,
    borderStyle: 'dotted',
    padding: 8,
  },
  keyPoints: { flex: 1, marginBottom: 8 },
  full: { marginHorizontal: 12, marginBottom: 12, minHeight: 130 },
  script: { fontFamily: fonts.script, fontSize: 26, color: colors.navyDark },
  boxInput: {
    flex: 1,
    minHeight: 80,
    fontFamily: fonts.serifMedium,
    fontSize: 14,
    color: colors.navyDark,
    textAlignVertical: 'top',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#FFEFF2',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
  },
  titleTag: {
    width: 90,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 42,
    backgroundColor: colors.navyDark,
    color: '#DDDDDD',
    fontFamily: fonts.serif,
    fontSize: 16,
  },
  titleInput: { flex: 1, paddingHorizontal: 10, fontFamily: fonts.serifMedium, fontSize: 15, color: colors.navyDark },
  paras: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, marginBottom: 12 },
  para: {
    width: '32%',
    minHeight: 260,
    backgroundColor: '#FFEFF2',
    borderWidth: 2,
    borderColor: '#000',
    padding: 5,
  },
  paraTag: {
    backgroundColor: colors.navyDark,
    color: '#DDDDDD',
    fontFamily: fonts.serif,
    fontSize: 13,
    textAlign: 'center',
    paddingVertical: 6,
    marginBottom: 6,
  },
  paraInput: {
    flex: 1,
    fontFamily: fonts.serifMedium,
    fontSize: 12,
    color: colors.navyDark,
    textAlignVertical: 'top',
  },
});
