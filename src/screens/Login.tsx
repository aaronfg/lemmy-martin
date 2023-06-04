import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * The Login screen for adding an account to the app.
 * @module Screens
 */
export const LoginScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Login Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
