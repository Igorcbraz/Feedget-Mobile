import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    top: -30,
    width: 80,
    height: 80,

    borderRadius: 40,
    backgroundColor: theme.colors.brand,
    borderColor: theme.colors.text_on_brand_color,
    borderWidth: 2,
  }
});