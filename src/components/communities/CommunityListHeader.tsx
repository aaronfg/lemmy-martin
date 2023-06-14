import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, ProgressBar, Text, useTheme } from 'react-native-paper';
import { getLemmyAPILoading } from '../../features/lemmy/selectors';
import { useAppSelector } from '../../redux/hooks';

export const CommunityListHeader = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Communities</Text>
      </View>
      {loading && <ProgressBar indeterminate={true} />}
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
