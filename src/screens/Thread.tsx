import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

/** Screen for viewing a thread */
export const ThreadScreen = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Thread!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
