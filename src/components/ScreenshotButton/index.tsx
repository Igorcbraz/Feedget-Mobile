import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot
}:Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      { screenshot ? (
        <View>
          <Image
            style={styles.image}
            source={{ uri: screenshot }}
          />

          <View style={styles.removeIcon}>
            <FontAwesome5
              name="trash-alt"
              size={20}
              color={theme.colors.text_secondary}
            />
          </View>
        </View>
      ) : (
        <Ionicons
          name="ios-camera-outline"
          size={24}
          color={theme.colors.text_primary}
        />
      )}
    </TouchableOpacity>
  );
}