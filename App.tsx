/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginStack } from './src/navigation/LoginStack';
import { LoginScreen } from './src/screens/Login';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <LoginStack.Navigator>
          <LoginStack.Screen name="Login" component={LoginScreen} />
        </LoginStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
