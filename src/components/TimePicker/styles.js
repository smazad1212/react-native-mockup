import { StyleSheet } from 'react-native';

import { COLOR_SECONDARY, FONT, FONT_SIZE_LABEL, BORDER_RADIUS, BORDER_WIDTH, BORDER_COLOR } from './../../styles/common';

const timePicker = StyleSheet.create({
  input: {
    fontSize: FONT_SIZE_LABEL,
    color: COLOR_SECONDARY,
    fontFamily: FONT,
    width: 45,
    height: 50,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    borderRadius: BORDER_RADIUS,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default timePicker;