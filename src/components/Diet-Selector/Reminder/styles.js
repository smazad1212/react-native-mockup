import { StyleSheet } from 'react-native';

import { COLOR_SECONDARY, FONT, FONT_SIZE_LABEL, BORDER_RADIUS, BORDER_WIDTH, BORDER_COLOR } from './../../../styles/common';

const reminder = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  button: {
    marginHorizontal: 10,
  },
  label: {
    fontFamily: FONT,
    fontSize: 16,
    fontWeight: '600',
    padding: 8,
  },

});

export default reminder;