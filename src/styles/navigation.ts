import { StyleSheet } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Dimensions } from "react-native";
import { theme } from '../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: theme.colors.brand,
    borderRadius: 15,
    height: 75,
  },
  modal : {
    width: Dimensions.get('window').width,
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  }, 
  indicator: {
    backgroundColor: theme.colors.text_primary,
    width: 56,
  }
});