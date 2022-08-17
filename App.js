import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MoodTracker from './screens/MoodTracker';
import Focus from './screens/Focus';
import Tips from './screens/Tips';
import Planner from './screens/Planner';
import StudyNotes from './screens/StudyNotes'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Container />
      </View>
    );
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Focus: Focus,
  MoodTracker: MoodTracker,
  Tips: Tips,
  Planner: Planner,
  StudyNotes:StudyNotes,
});

const Container = createAppContainer(navigator);


