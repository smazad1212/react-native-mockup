import { StyleSheet } from 'react-native';

import { FONT, FONT_SIZE_LABEL, BORDER_RADIUS, BORDER_WIDTH, BORDER_COLOR } from './../../../styles/common';

const label = StyleSheet.create({
  body: {
    fontFamily: FONT,
    fontSize: FONT_SIZE_LABEL,
    borderRadius: BORDER_RADIUS,
    borderColor: BORDER_COLOR,
    borderWidth: BORDER_WIDTH,
    height: 50,
    textDecorationLine: 'none',
    paddingHorizontal: 10,
    marginVertical: 15,

  }
})

export default label;