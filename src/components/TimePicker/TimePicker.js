import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements'

import timePicker from './styles';

export default class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: '11',
      min: '52',
      meridiem: 'AM',
    };
  }

  handleHourInc = () => {
    if (this.state.hour === '12') {
      this.setState({hour: '1'});
    }
    else {
      this.setState({
        hour: String(parseInt(this.state.hour) + 1)
      });
    }
  }
  handleHourDec = () => {
    if (this.state.hour === '1') {
      this.setState({hour: '12'});
    }
    else {
      this.setState({
        hour: String(parseInt(this.state.hour) - 1)
      });
    }
  }

  handleMinInc = () => {
    if (this.state.min === '60') {
      this.setState({min: '00'});
    }
    else {
      this.setState({
        min: String(parseInt(this.state.min) + 1)
      });
    }
  }
  handleMinDec = () => {
    if (this.state.min === '00') {
      this.setState({min: '60'});
    }
    else {
      this.setState({
        min: String(parseInt(this.state.min) - 1)
      });
    }
  }

  handleMeridiem = () => {
    if (this.state.meridiem === 'AM') {
      this.setState({meridiem: 'PM'});
    }
    else {
      this.setState({meridiem: 'AM'});
    }
  }

  render() {
    return (
      <View style={timePicker.container}>

        <View style={timePicker.section}>
          <TouchableOpacity style={timePicker.arrow} onPress={this.handleHourInc}>
            <Icon
              name='keyboard-arrow-up'
              color='#0097A7' />
          </TouchableOpacity>
          <Text style={timePicker.input}>{this.state.hour}</Text>
          <TouchableOpacity style={timePicker.arrow} onPress={this.handleHourDec}>
            <Icon
              name='keyboard-arrow-down'
              color='#0097A7' />
          </TouchableOpacity>
        </View>

        <View style={timePicker.section}>
          <Text>:</Text>
        </View>

        <View style={timePicker.section}>
          <TouchableOpacity style={timePicker.arrow} onPress={this.handleMinInc}>
            <Icon
              name='keyboard-arrow-up'
              color='#0097A7' />
          </TouchableOpacity>
          <Text style={timePicker.input}>{this.state.min}</Text>
          <TouchableOpacity style={timePicker.arrow} onPress={this.handleMinDec}>
            <Icon
              name='keyboard-arrow-down'
              color='#0097A7' />
          </TouchableOpacity>
        </View>

        <View style={timePicker.section}>
          <TouchableOpacity onPress={this.handleMeridiem}>
            <Text style={timePicker.meridiem}>{this.state.meridiem}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}