import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const DietList = ({page, handlePage}) => (
  <View>
    <TouchableOpacity onPress={handlePage}>
      <Text>on {page} Go Back</Text>
    </TouchableOpacity>

  </View>
)

export default DietList;
