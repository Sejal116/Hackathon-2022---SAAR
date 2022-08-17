import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Tips extends React.Component {
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
        <Text style={styles.head}>Top Ten Tips!</Text>
<Text style={styles.textstyle}> #1 – Study smarter, not harder </Text> 

 <Text style={styles.textstyle}> #2 – Create mind maps about the topic you’re learning </Text>  

<Text style={styles.textstyle}> #3 – Clear your desk and clean your room to remove any distractions</Text>  

<Text style={styles.textstyle}> #4 – Take notes from your textbook and lecture notes </Text> 

<Text style={styles.textstyle}> #5 – Plan your schedule  </Text>  

<Text style={styles.textstyle}> #6 – Spaced repetition </Text>  

<Text style={styles.textstyle}> #7 – Listen to low volume classical music or any music that helps you study </Text> 

 <Text style={styles.textstyle}> #8 – Study before bed </Text> 

<Text style={styles.textstyle}> #9 – Use the pomodoro technique </Text>  

<Text style={styles.textstyle}> #10 – The PQ4R technique</Text> 
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
  }
});
