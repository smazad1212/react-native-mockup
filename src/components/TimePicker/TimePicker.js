import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import timePicker from './styles';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '11',
      min: '52',
      meridiem: 'am',
    };
  }
  handleMinInc = () => {
    this.setState(prevState => ({
      min: String(parseInt(prevState.min) + 1)
    }));
  }

  render() {
    return (
      <View>
        <Text style={timePicker.input}>{this.state.min}</Text>
        <Button title={this.state.min} onPress={this.handleMinInc}/>
        <TouchableOpacity onPress={this.handleMinInc}><Text>v</Text></TouchableOpacity>
      </View>
    );
  }
}