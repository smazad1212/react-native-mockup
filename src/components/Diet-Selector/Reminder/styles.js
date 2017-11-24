import { StyleSheet } from 'react-native';

import { FONT_COLOR_SECONDARY, FONT } from './../../../styles/common';

const reminder = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  label: {
    fontFamily: FONT,
    fontSize: 15,
    fontWeight: '600',
    padding: 8,
    color: FONT_COLOR_SECONDARY,
  },

});

export default reminder;