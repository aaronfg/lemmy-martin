import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';

export const CommunityListHeader = (): JSX.Element => {
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communities</Text>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.tertiary,
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
};
