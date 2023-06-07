import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
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
      {item.communityView.community.icon && (
        <View>
          <Image source={{ uri: item.communityView.community.icon }} />
        </View>
      )}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.communityView.community.title}</Text>
        <Text style={styles.name}>{item.communityView.community.name}</Text>
        <Text>{item.communityView.community.description}</Text>
      </View>
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      padding: 20,
      flexDirection: 'row',
    },
    detailsContainer: {
      padding: 1,
    },
    image: {
      width: 100,
      height: 100,
    },
    imageContainer: {
      paddingRight: 12,
    },
    title: {
      fontWeight: 'bold',
    },
    name: {
      color: theme.colors.onSurfaceDisabled,
    },
  });
};
