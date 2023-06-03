/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ backgroundColor: '#FFFFFF' }}>
            <View>
              <Text>Blah</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
