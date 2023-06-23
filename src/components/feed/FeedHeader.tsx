import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, ProgressBar, Text, useTheme } from 'react-native-paper';
import { getLemmyAPILoading } from '../../features/lemmy/selectors';
import {
  getCurrentInstance,
  getSettingsFeedSortType,
} from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';

/**
 * Header for the Feed screen
 */
export const FeedListHeader = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const currentInstance = useAppSelector(getCurrentInstance);
  const sortType = useAppSelector(getSettingsFeedSortType);
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Local</Text>
        <Text style={styles.instance}>{sortType}</Text>
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
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    instance: {
      fontSize: 16,
      marginLeft: 12,
      color: theme.colors.secondary,
    },
  });
};
