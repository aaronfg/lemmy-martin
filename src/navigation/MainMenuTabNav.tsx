import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommunitiesScreen } from '../screens/Communities';
import { LoginScreen } from '../screens/Login';
import { LemmyDarkTheme } from '../theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from '../types';

const Tab = createBottomTabNavigator();

export const HomeTabNav = (): JSX.Element => {
  return (
    <Tab.Navigator>
      {/* Feed */}
      <Tab.Screen
        name={ScreenNames.Communities}
        component={CommunitiesScreen}
        options={{
          tabBarIcon: props => (
            <MaterialIcon
              name={MaterialIconNames.Home}
              size={TAB_ICON_SIZE}
              color={
                props.focused
                  ? LemmyDarkTheme.colors.primary
                  : LemmyDarkTheme.colors.secondary
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: props => (
            <MaterialIcon
              name={MaterialIconNames.Menu}
              size={TAB_ICON_SIZE}
              color={
                props.focused
                  ? LemmyDarkTheme.colors.primary
                  : LemmyDarkTheme.colors.secondary
              }
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
