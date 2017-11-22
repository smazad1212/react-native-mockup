import React from 'react';
import { View } from 'react-native';

import Title from './Title/Title'
import Border from './Border/Border';
import TimePicker from './TimePicker/TimePicker';
import BasicSwitchExample from './Switch/Switch'
import Label from './Label/Label';

import styles from './styles';

const DietSelector = () => (
  <View>
    <Title header="New Diet"/>
    <Border/>
    <View style={styles.time}>
      <TimePicker/>
      <BasicSwitchExample/>
    </View>
    <Label/>
  </View>
)

export default DietSelector;