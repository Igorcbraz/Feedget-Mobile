import React, { useRef, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screenOptions } from './src/pages/Screens';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';

import { NavigationItem } from './src/components/NavigationItem';
import { Widget } from './src/components/Widget';
import { Success } from './src/components/Success';
import { Form } from './src/components/Form';
import { Options } from './src/components/Options';
import { feedbackTypes } from './src/utils/feedbackTypes';

import { styles } from './src/styles/navigation';

const Tab = createBottomTabNavigator();

export type FeedbackType = keyof typeof feedbackTypes;

function App() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function handleRestartFeedback(){
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent(){
    setFeedbackSent(true)
  }

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.container
          }}
        >
          { Object.entries(screenOptions).map(([key, value]) => {
            return value.icon ? (
              <Tab.Screen key={key} name={key} component={value.screen} options={{
                tabBarIcon: () => <NavigationItem Icon={value.icon} label={key}/>
              }}/>
            ) : (
              <Tab.Screen key={key} name={key} component={value.screen} options={{
                tabBarButton: () => <Widget bottomSheetRef={bottomSheetRef}/>
              }}/>
              )
            })}
        </Tab.Navigator>
      </NavigationContainer>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        { feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback}/>
        ) : (
          <>
            { feedbackType 
              ? <Form
                  feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
                />
              : <Options onFeedbackTypeChanged={setFeedbackType}/>
            }
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(App);