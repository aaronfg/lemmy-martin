import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/** The Login screen for adding an account to the app. */
export const LoginScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Login Screen!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
