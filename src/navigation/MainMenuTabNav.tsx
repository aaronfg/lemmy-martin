import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommunityListHeader } from '../components/communities/CommunityListHeader';
import { FeedListHeader } from '../components/feed/FeedHeader';
import { AccountSwitcher } from '../components/profile/AccountSwitcher';
import { CommunitiesScreen } from '../screens/Communities';
import { MainMenuScreen } from '../screens/MainMenu';
import { LemmyDarkTheme } from '../theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from '../types';
import { FeedAndPostNav } from './FeedAndPostNav';

const Tab = createBottomTabNavigator();

export const HomeTabNav = (): JSX.Element => {
  return (
    <Tab.Navigator>
      {/* Feed */}
      {/* <Tab.Screen
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
      /> */}
      <Tab.Screen
        name={ScreenNames.FeedAndPostView}
        component={FeedAndPostNav}
        options={{
          header: props => <FeedListHeader />,
          headerShown: true,
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
      <Tab.Screen
        name={ScreenNames.Communities}
        component={CommunitiesScreen}
        options={{
          // headerShown: false,
          header: () => <CommunityListHeader />,
          tabBarIcon: props => (
            <MaterialIcon
              name="alpha-c-circle"
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
          header() {
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
