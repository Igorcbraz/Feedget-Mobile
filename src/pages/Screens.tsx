import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { DashboardScreen } from './Dashboard';
import { HomeScreen } from './Home';

import { theme } from '../theme';

export const screenOptions = {
  'Home': {
    icon: <Entypo name='home' size={24} color={theme.colors.text_on_brand_color} />,
    screen: HomeScreen
  },
  'Widget': {
    icon: null,
    screen: HomeScreen
  },
  'Dashboard': {
    icon: <FontAwesome name="user" size={24} color={theme.colors.text_on_brand_color} />,
    screen: DashboardScreen
  },
}