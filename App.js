import React, { Component } from 'react';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';

import Title from './src/components/Title/Title';
import Border from './src/components/Border/Border';
import TimePicker from './src/components/TimePicker/TimePicker';
import BasicSwitchExample from './src/components/Switch/Switch'
import Label from './src/components/Label/Label';

import styles from './styles';

export default class App extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          <Title header="New Diet"/>
          <Border/>
          <View style={styles.time}>
            <TimePicker/>
            <BasicSwitchExample/>
          </View>
          <Label/>
        </View>
      ) :  <AppLoading/>
    )
  }
}
