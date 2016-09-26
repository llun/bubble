import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  VibrationIOS,
  NativeModules,
} from 'react-native';
import Button from 'react-native-button';
import * as consts from '../consts';

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#ff0000',
  },
});

class Box extends Component {
  constructor(props) {
    super(props);
    this.feedbackGenerator = NativeModules.FeedbackManager;
  }

  onStartShouldSetResponder() {
    return true;
  }

  onResponderGrant(event) {
    this.feedbackGenerator.select();
    this.feedbackGenerator.prepareImpact();
  }

  onResponderRelease(event) {
    this.feedbackGenerator.impact();
  }

  render() {
    return <View style={styles.box}
      onStartShouldSetResponder={this.onStartShouldSetResponder.bind(this)}
      onResponderGrant={this.onResponderGrant.bind(this)}
      onResponderRelease={this.onResponderRelease.bind(this)}
      />
  }
}

export default Box;
