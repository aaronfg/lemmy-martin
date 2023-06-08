import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { getCommunityListItems } from '../features/communities/selectors';
import { getLemmyAPILoading } from '../features/lemmy/selectors';
import { useAppSelector } from '../redux/hooks';

export const ListFooterLoading = (): JSX.Element => {
  const loading = useAppSelector(getLemmyAPILoading);
  const communities = useAppSelector(getCommunityListItems);
  const styles = createStyleSheet();
  return loading && communities.length !== 0 ? (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator />
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
  });
};
