/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginStack } from './src/navigation/LoginStack';
import { LoginScreen } from './src/screens/Login';
import { CombinedDarkTheme } from './src/theme';

function App(): JSX.Element {
  return (
    <PaperProvider theme={CombinedDarkTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={CombinedDarkTheme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={CombinedDarkTheme.colors.background}
          />
          <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={LoginScreen} />
          </LoginStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
