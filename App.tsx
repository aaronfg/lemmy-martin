/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { FeedScreen } from './src/screens/Feed';
import { MainMenuScreen } from './src/screens/MainMenu';
import { LemmyDarkTheme } from './src/theme';
import { MaterialIconNames, ScreenNames, TAB_ICON_SIZE } from './src/types';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider theme={LemmyDarkTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={LemmyDarkTheme}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={LemmyDarkTheme.colors.background}
            />
            <Tab.Navigator>
              {/* Feed */}
              <Tab.Screen
                name={ScreenNames.Feed}
                component={FeedScreen}
                options={{
                  tabBarIcon: props => (
                    <Icon
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
                name={ScreenNames.MainMenu}
                component={MainMenuScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: props => (
                    <Icon
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
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
