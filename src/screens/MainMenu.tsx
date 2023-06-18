import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/types';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const styles = createStyleSheet();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      // paddingHorizontal: 12,
      paddingTop: 20,
    },
    icon: {
      padding: 2,
      // backgroundColor: 'red',
    },
  });
};
