import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
    width: 48,
    height: 48,

    borderRadius: 24,
    backgroundColor: theme.colors.brand,
  },
  modal : {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  }, 
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  }
});