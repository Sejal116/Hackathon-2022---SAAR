import * as React from 'react';
import { View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Credits from './screens/Credits';
import Focus from './screens/Focus';
import Tips from './screens/Tips';
import Planner from './screens/Planner';
import StudyNotes from './screens/StudyNotes';

const navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Focus: Focus,
  Credits: Credits,
  Tips: Tips,
  Planner: Planner,
  StudyNotes: StudyNotes,
});

const Container = createAppContainer(navigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container />
      </View>
    );
  }
}
