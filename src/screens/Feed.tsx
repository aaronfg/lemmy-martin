import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSettingsFeedSource } from '../features/settings/selectors';
import { useAppSelector } from '../redux/hooks';

/**
 * Screen for the main feed list
 * @module Screens
 */
export const FeedScreen = (): JSX.Element => {
  const feedSource = useAppSelector(getSettingsFeedSource);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Feed</Text>
          <Text>Default Source: {feedSource}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
