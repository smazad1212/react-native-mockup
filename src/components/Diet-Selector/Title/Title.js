import React from 'react';
import { Text, View } from 'react-native';

import title from './styles';

const Title = ({header}) => (
  <View>
    <Text style={title.heading}>{header}</Text>
  </View>
)

export default Title;