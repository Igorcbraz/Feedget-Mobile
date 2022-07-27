import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface Props {
  Icon: JSX.Element;
  label: string;
}

export function NavigationItem({ Icon, label }: Props) {
  return (
    <View style={styles.container}>
      { Icon }

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}