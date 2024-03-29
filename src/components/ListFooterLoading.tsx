import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { getCommunityListItems } from '../features/communities/selectors';
import { getLemmyAPILoading } from '../features/lemmy/selectors';
import { useAppSelector } from '../redux/hooks';

/** Loader view shown at the bottom of Lists when they load more data */
export const ListFooterLoading = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const communities = useAppSelector(getCommunityListItems);
  const styles = createStyleSheet();
  return loading && communities.length !== 0 ? (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator style={styles.loadingIndicator} />
    </View>
  ) : (
    <View />
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    container: {
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingIndicator: {
      marginTop: 8,
      marginBottom: 12,
    },
  });
};
