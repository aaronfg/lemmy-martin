import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSettingsCurrentAccount } from '../features/settings/selectors';
import { RootStackParamList } from '../navigation/types';
import { useAppSelector } from '../redux/hooks';

/** Screen for the main menu */
export const MainMenuScreen = (): JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const styles = createStyleSheet();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {currentAccount ? (
            <Text>Current Account stuff goes here</Text>
          ) : (
            <List.Item key={nanoid()} title="You are not logged in" />
          )}
        </View>
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
