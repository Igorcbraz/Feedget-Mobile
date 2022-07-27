import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from '../theme';

export function HomeScreen() {
  return (
    <View style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
    </View>
  );
}