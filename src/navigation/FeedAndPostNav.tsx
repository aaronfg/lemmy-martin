import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FeedListHeader } from '../components/feed/FeedHeader';
import { PostHeader } from '../components/post/PostHeader';
import { getUserUIFeedCurrentPost } from '../features/user/selectors';
import { useAppSelector } from '../redux/hooks';
import { FeedScreen } from '../screens/Feed';
import { PostView } from '../screens/PostView';
import { LemmyDarkTheme } from '../theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from '../types';

const Tab = createMaterialTopTabNavigator();
export const FeedAndPostNav = (): JSX.Element => {
  const currentPost = useAppSelector(getUserUIFeedCurrentPost);
  return (
    <Tab.Navigator
      tabBar={props => {
        // activeRoute = navigation.state.routes[navigation.state.index];
        const activeRoute =
          props.navigation.getState().routes[props.navigation.getState().index];
        return activeRoute.name === ScreenNames.PostView ? (
          <PostHeader />
        ) : (
          <FeedListHeader />
        );
      }}
      screenOptions={props => {
        return {
          tabBarShowIcon: false,
          swipeEnabled: !!currentPost,
        };
      }}>
      {/* Feed */}
      <Tab.Screen
        name={ScreenNames.Feed}
        component={FeedScreen}
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
      {/* Post */}
      <Tab.Screen name={ScreenNames.PostView} component={PostView} />
    </Tab.Navigator>
  );
};
