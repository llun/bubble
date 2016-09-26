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

  onResponderGrant(event) {
    this.released = false;
    this.feedbackGenerator.select();
    this.feedbackGenerator.prepareImpact();
  }

  onResponderRelease(event) {
    // this.feedbackGenerator.impact();
  }

  onResponderMove(event) {
    let direction = 0;
    if (this.previous) direction = event.nativeEvent.force - this.previous;
    this.previous = event.nativeEvent.force;
    console.log(event.nativeEvent.force);

    if (direction < 0 && !this.released) {
      this.released = true;
      this.feedbackGenerator.impact();
    }
  }

  render() {
    return <View style={styles.box}
      onStartShouldSetResponder={(event) => true}
      onMoveShouldSetResponder={(event) => true}
      onResponderGrant={this.onResponderGrant.bind(this)}
      onResponderRelease={this.onResponderRelease.bind(this)}
      onResponderMove={this.onResponderMove.bind(this)}
      />
  }
}

export default Box;
