import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Feed</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
