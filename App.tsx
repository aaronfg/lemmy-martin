/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { navigationRef } from './src/navigation';
import { HomeTabNav } from './src/navigation/MainMenuTabNav';
import { RootStackParamList } from './src/navigation/types';
import { store } from './src/redux/store';
import { LoginScreen } from './src/screens/Login';
import { LemmyDarkTheme } from './src/theme';
import { ScreenNames } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider theme={LemmyDarkTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={LemmyDarkTheme} ref={navigationRef}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={LemmyDarkTheme.colors.background}
            />
            <Stack.Navigator>
              {/* Tabs */}
              <Stack.Screen
                name="Tabs"
                component={HomeTabNav}
                options={{
                  headerShown: false,
                }}
              />
              {/* Login */}
              <Stack.Screen
                name={ScreenNames.Login}
                component={LoginScreen}
                // options={{
                //   presentation: 'fullScreenModal',
                // }}
              />
            </Stack.Navigator>
            {/* <Tab.Navigator> */}
            {/* Feed */}
            {/* <Tab.Screen
                name={ScreenNames.Communities}
                component={CommunitiesScreen}
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
              /> */}
            {/* </Tab.Navigator> */}
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
