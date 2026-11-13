import * as React from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Credits from './screens/Credits';
import Focus from './screens/Focus';
import Tips from './screens/Tips';
import Planner from './screens/Planner';
import StudyNotes from './screens/StudyNotes';
import { colors } from './theme';

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
  state = { fontsLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      Caprasimo: require('./assets/fonts/Caprasimo_400Regular.ttf'),
      GreatVibes: require('./assets/fonts/GreatVibes_400Regular.ttf'),
      LoraBold: require('./assets/fonts/Lora_700Bold.ttf'),
      LoraMedium: require('./assets/fonts/Lora_500Medium.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <View style={{ flex: 1, backgroundColor: colors.navy }} />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Container />
      </View>
    );
  }
}
