import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';
//import all the components we are  to use


export default class StudyNotes extends React.Component {
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
        <Text style={styles.head}>My Notes</Text>
        <Text style={styles.textStyle}>
        </Text>
        <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
        />
        <Text style={{color: 'blue'}}>}</Text>
      </View>
    </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 20
  },
  back: {
    width: 30,
    height: 30,
    marginBottom: 50
  },
  head: {
    textAlign: 'center',
    fontSize: 50,
    color:'black',
    fontWeight: 'bold',
    backgroundColor: "lightpink",
    marginBottom: 10,
    marginTop: -30
  },
    input: {
    width: 400,
    height: 400,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Monospace",
    backgroundColor: '#e8e8e8',
    fontSize: 20
  }
});