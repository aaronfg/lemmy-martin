import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FeedListHeader } from '../components/feed/FeedHeader';
import { AccountSwitcher } from '../components/profile/AccountSwitcher';
import { FeedScreen } from '../screens/Feed';
import { MainMenuScreen } from '../screens/MainMenu';
import { LemmyDarkTheme } from '../theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from '../types';

const Tab = createBottomTabNavigator();

export const HomeTabNav = (): JSX.Element => {
  return (
    <Tab.Navigator>
      {/* Feed */}
      <Tab.Screen
        name={ScreenNames.Feed}
        component={FeedScreen}
        options={{
          header: props => <FeedListHeader />,
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
      {/* Communities */}
      {/* <Tab.Screen
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
      /> */}
      {/* Main Menu */}
      <Tab.Screen
        name={ScreenNames.MainMenu}
        component={MainMenuScreen}
        options={{
          headerShown: true,
          header(props) {
            return <AccountSwitcher />;
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
