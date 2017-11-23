import React, { Component } from 'react';
import { Text, View } from 'react-native';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import reminder from './styles'

class Reminder extends Component {
  constructor () {
    super()
    this.state = {
      options: [{label: 'Remind during medication', value: 1}, {label: 'Don\'t remind during medication', value: 0}],
      selected: 0,
    }
  }
  render () {
    return (
      <View style={reminder.container}>
        <RadioForm style={reminder.container}>
          {this.state.options.map((obj, i) => {
            let handleOnPress = (value, index) => {
              this.setState({
                selected: index
              })
            }
            return (
              <RadioButton labelHorizontal={true} key={i} >
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={this.state.selected === i}
                  onPress={handleOnPress}
                  buttonInnerColor={'#4db6ac'}
                  buttonOuterColor={this.state.selected === i ? '#00897b' : '#ccc'}
                  buttonSize={10}
                  buttonStyle={reminder.button}
                  // buttonWrapStyle={{marginLeft: 10}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  onPress={handleOnPress}
                  // labelStyle={{fontWeight: 'bold', color: '#2ecc71'}}
                  labelStyle={reminder.label}
                />
              </RadioButton>
            )
          })}
        </RadioForm>


        {/*<Text>selected: {this.state.options[this.state.selected].label}</Text>*/}

      </View>
    );
  }
}


export default Reminder;