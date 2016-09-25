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

  onPressIn(event) {
    this.feedbackGenerator.prepareNotify();
    if (this.timer) { clearTimeout(this.timer); }
    this.timer = setTimeout(() => {
      this.feedbackGenerator.notifyWithFeedback(consts.NOTIFY_ERROR);
    }, 1000);
  }

  onPressOut(event) {
    clearTimeout(this.timer);
  }

  render() {
    return <TouchableWithoutFeedback
      onPressIn={(event) => { this.onPressIn(event); }}
      onPressOut={(event) => { this.onPressOut(event); }}>
      <View style={styles.box} />
    </TouchableWithoutFeedback>;
  }
}

export default Box;
