import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Button from 'react-native-button';

class Bubble extends Component {
  onPress() {
    this.props.feedback();
  }

  render() {
    return <Button onPress={()=>{ this.onPress(); }}>{this.props.title}</Button>;
  }
}

export default Bubble;
