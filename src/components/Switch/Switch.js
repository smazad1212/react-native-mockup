import React, { Component } from 'react';
import { View, Switch } from 'react-native';

export default class BasicSwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: true,
    };
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({switchIsOn: value})}
          value={this.state.switchIsOn}
          onTintColor="#4db6ac"
          thumbTintColor="#00897b"
        />
      </View>
    )
  }
}