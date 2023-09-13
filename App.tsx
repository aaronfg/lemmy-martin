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
              <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

export default App;
