import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MD3Theme, Text, useTheme } from 'react-native-paper';
import { ICommunityListItem } from '../features/communities/types';

export interface IListItemCommunityProps {
  item: ICommunityListItem;
}

export const ListItemCommunity = (
  props: IListItemCommunityProps,
): JSX.Element => {
  const { item } = props;
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  return (
    <View key={nanoid()} style={styles.container}>
      <Text>{item.communityView.community.title}</Text>
      <Text>{item.communityView.community.name}</Text>
      <Text>{item.communityView.community.description}</Text>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
    title: {
      fontWeight: 'bold',
    },
    name: {
      color: theme.colors.onSurfaceDisabled,
    },
  });
};
