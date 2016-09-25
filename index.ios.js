/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from 'react-native';

import Bubble from './components/bubble';
import Box from './components/box';
import * as consts from './consts';

class Application extends Component {
  constructor(props) {
    super(props);
    this.feedbackGenerator = NativeModules.FeedbackManager;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.single}>
          <Bubble title='Impact' feedback={() => { this.feedbackGenerator.impact(); }}/>
          <Bubble title='Selector' feedback={() => { this.feedbackGenerator.select(); }}/>
        </View>
        <View style={styles.second}>
          <Bubble title='Success' feedback={() => { this.feedbackGenerator.notifyWithFeedback(consts.NOTIFY_SUCCESS); }}/>
          <Bubble title='Warning' feedback={() => { this.feedbackGenerator.notifyWithFeedback(consts.NOTIFY_WARNING); }}/>
          <Bubble title='Error' feedback={() => { this.feedbackGenerator.notifyWithFeedback(consts.NOTIFY_ERROR); }}/>
        </View>
        <View style={styles.third}>
          <Box />
          <Box />
          <Box />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  single: {
    flex: 1,
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  third: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'steelblue',
  }
});

AppRegistry.registerComponent('Bubble', () => Application);
