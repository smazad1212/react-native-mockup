import React, { Component } from 'react';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';

import DietSelector from './src/components/Diet-Selector/index'

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
          <DietSelector/>
        </View>
      ) :  <AppLoading/>
    )
  }
}
