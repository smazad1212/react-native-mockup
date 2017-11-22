import React from 'react';
import { TextInput } from 'react-native';

import label from './styles';

const Label = () => (
  <TextInput
    style={label.body}
    placeholder="Diet Label"
    underlineColorAndroid='transparent'
  />
)

export default Label;