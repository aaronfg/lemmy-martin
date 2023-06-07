import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const ListItemPost = (): JSX.Element => {
  const styles = createStyleSheet();
  return (
    <View style={styles.container}>
      <Text>List Item</Text>
    </View>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
  });
};
