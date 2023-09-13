import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, ProgressBar, Text, useTheme } from 'react-native-paper';
import { getLemmyAPILoading } from '../../features/lemmy/selectors';
import { getCurrentInstance } from '../../features/settings/selectors';
import { useAppSelector } from '../../redux/hooks';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * Header for the Communities screen
 */
export const CommunityListHeader = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const currentInstance = useAppSelector(getCurrentInstance);
  const theme = useTheme();
  const styles = createStyleSheet(theme);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Communities</Text>
        {currentInstance && (
          <Text style={styles.instance}>{currentInstance.name}</Text>
        )}
      </View>
      {loading && <ProgressBar indeterminate={true} />}
    </SafeAreaView>
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
