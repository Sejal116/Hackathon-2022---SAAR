import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors, fonts, titleShadow } from '../theme';

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

function format(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
}

// Pomodoro timer: 25 minutes of focus, then a 5 minute break.
export default class Focus extends React.Component {
  state = { mode: 'focus', seconds: FOCUS_SECONDS, running: false, sessions: 0 };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState((prev) => {
      if (prev.seconds > 1) {
        return { seconds: prev.seconds - 1 };
      }
      clearInterval(this.timer);
      const finishedFocus = prev.mode === 'focus';
      return {
        running: false,
        mode: finishedFocus ? 'break' : 'focus',
        seconds: finishedFocus ? BREAK_SECONDS : FOCUS_SECONDS,
        sessions: finishedFocus ? prev.sessions + 1 : prev.sessions,
      };
    });
  };

  toggle = () => {
    if (this.state.running) {
      clearInterval(this.timer);
      this.setState({ running: false });
    } else {
      this.timer = setInterval(this.tick, 1000);
      this.setState({ running: true });
    }
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState({
      running: false,
      seconds: this.state.mode === 'focus' ? FOCUS_SECONDS : BREAK_SECONDS,
    });
  };

  render() {
    const { mode, seconds, running, sessions } = this.state;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title="Focus" />
        <Text style={styles.mode}>{mode === 'focus' ? 'Time to focus' : 'Take a break'}</Text>
        <View style={styles.outer}>
          <View style={styles.mid}>
            <View style={styles.inner}>
              <Text style={styles.time}>{format(seconds)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.toggle}>
            <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sessions}>Focus sessions done: {sessions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.navy, alignItems: 'center' },
  mode: { fontFamily: fonts.script, fontSize: 32, color: colors.white, marginBottom: 20 },
  outer: {
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: '#9998BB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: '#0A0A7A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#4F93A8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: { fontFamily: fonts.title, fontSize: 40, color: colors.white, ...titleShadow },
  buttons: { flexDirection: 'row', marginTop: 34 },
  button: {
    width: 130,
    height: 48,
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonText: { fontFamily: fonts.script, fontSize: 28, color: '#DDDDDD' },
  sessions: { fontFamily: fonts.serifMedium, fontSize: 16, color: colors.white, marginTop: 28 },
});
