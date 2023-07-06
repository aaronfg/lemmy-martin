import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ListItemCommentActions = (): JSX.Element => {
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <MaterialIcon name="home" />
      </View>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    actionContainer: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      flexDirection: 'row',
      backgroundColor: 'purple',
      justifyContent: 'center',
      height: '100%',
    },
  });
};
