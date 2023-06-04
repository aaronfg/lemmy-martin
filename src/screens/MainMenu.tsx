import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Main Menu</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
