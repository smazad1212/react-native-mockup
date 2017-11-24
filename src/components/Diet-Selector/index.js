import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Title from './Title/Title'
import Border from './Border/Border';
import TimePicker from './TimePicker/TimePicker';
import BasicSwitchExample from './Switch/Switch'
import Label from './Label/Label';
import Reminder from './Reminder/Reminder'

import styles from './styles';

let handleSave = () => {
  console.log("Saved")
}

const DietSelector = () => (
  <View>
    <Title header="New Diet"/>
    <Border/>
    <View style={styles.time}>
      <TimePicker/>
      <BasicSwitchExample/>
    </View>
    <Label/>
    <Reminder/>
    <Border/>
    <TouchableOpacity style={styles.button} onPress={this.handleSave}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>

  </View>
)

export default DietSelector;