import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileHeader } from '../components/ProfileHeader';
import { CommunityListHeader } from '../components/communities/CommunityListHeader';
import { CommunitiesScreen } from '../screens/Communities';
import { MainMenuScreen } from '../screens/MainMenu';
import { LemmyDarkTheme } from '../theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from '../types';

const Tab = createBottomTabNavigator();

export const HomeTabNav = (): JSX.Element => {
  return (
    <Tab.Navigator>
      {/* Communities */}
      <Tab.Screen
        name={ScreenNames.Communities}
        component={CommunitiesScreen}
        options={{
          // headerShown: false,
          header: props => <CommunityListHeader />,
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
      {/* Main Menu */}
      <Tab.Screen
        name={ScreenNames.MainMenu}
        component={MainMenuScreen}
        options={{
          headerShown: true,
          header(props) {
            return <ProfileHeader />;
          },
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
