import { StyleSheet } from 'react-native';

import { FONT_COLOR_HEADING, FONT } from './../../../styles/common';

const title = StyleSheet.create({
  heading: {
    fontSize: 35,
    color: FONT_COLOR_HEADING,
    fontFamily: FONT,
    paddingTop: 20,
    paddingBottom: 20,
  }
});

export default title;