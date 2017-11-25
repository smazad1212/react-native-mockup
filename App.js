import React, { Component } from 'react';
import { View } from 'react-native';
import { Font, AppLoading } from 'expo';

import DietSelector from './src/components/Diet-Selector/index';
import DietList from './src/components/Diet-List/index';

import styles from './styles';

export default class App extends Component {
  state = {
    fontLoaded: false,
    page: 'selector',
  };
  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  handlePage = () => {
    if (this.state.page === 'selector')
      this.setState({page: 'list'})
    else if (this.state.page === 'list')
      this.setState({page: 'selector'})
  }

  render() {
    return (
      this.state.fontLoaded ? (
        <View style={styles.container}>
          {this.state.page === 'selector' ?
            <DietSelector page={this.state.page} handlePage={this.handlePage}/>
            :
            <DietList page={this.state.page} handlePage={this.handlePage}/>}
        </View>
      ) :  <AppLoading/>
    )
  }
}