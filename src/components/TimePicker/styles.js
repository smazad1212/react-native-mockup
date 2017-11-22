import { StyleSheet } from 'react-native';

import { COLOR_SECONDARY, FONT, FONT_SIZE_LABEL, BORDER_RADIUS, BORDER_WIDTH, BORDER_COLOR } from './../../styles/common';

const timePicker = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
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
  },
  arrow: {
    width: 45,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meridiem: {
    width: 55,
    fontSize: 16,
    color: COLOR_SECONDARY,
    fontFamily: FONT,
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default timePicker;