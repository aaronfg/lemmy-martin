import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export const NotLoggedIn = (): JSX.Element => {
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View style={styles.container}>
      <Text>You are browsing as a Guest. Add an Account to Login</Text>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: 'purple',
      padding: 18,
    },
  });
};
