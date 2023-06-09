import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, MD3Theme, useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScreenMargin } from '../types';

export const ProfileHeader = (): JSX.Element => {
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View style={styles.container}>
      <Avatar.Icon
        icon={() => <MaterialIcon name="account" size={45} />}
        size={50}
      />
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceVariant,
      padding: ScreenMargin.Horizontal,
    },
  });
};
