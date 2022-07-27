import React, { RefObject } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes;

interface Props {
  bottomSheetRef: RefObject<BottomSheet>
}

export function Widget({ bottomSheetRef }: Props) {

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={35}
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
    </>
  );
}