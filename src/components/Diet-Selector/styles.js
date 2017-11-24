import { StyleSheet } from 'react-native';

import { COLOR_PRIMARY, FONT_SIZE_LABEL, BORDER_RADIUS } from './../../styles/common';

const styles = StyleSheet.create({
  time: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    alignItems: 'flex-end',

  },
  buttonText: {
    fontSize: FONT_SIZE_LABEL,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR_PRIMARY,
    color: '#fff',
}
});

export default styles;