import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { GestureResponderEvent, Image, StyleSheet, View } from 'react-native';
import {
  IconButton,
  MD3Theme,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { ICommunityListItem } from '../features/communities/types';
import { log } from '../logging/log';
import { MaterialIconNames } from '../types';

export interface IListItemCommunityProps {
  item: ICommunityListItem;
}

export const ListItemCommunity = (
  props: IListItemCommunityProps,
): JSX.Element => {
  const { item } = props;
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const onPress = (event: GestureResponderEvent) => {
    log.debug('item press:', event);
  };

  const onSubscribePress = () => {
    log.debug('icon press');
  };

  log.debug('icon: ' + item.communityView.community.icon);
  return (
    <View style={styles.outerContainer}>
      <TouchableRipple onPress={onPress}>
        <View key={nanoid()} style={styles.container}>
          {/* Icon */}
          {item.communityView.community.icon && (
            <View style={styles.communityIcon}>
              <Image source={{ uri: item.communityView.community.icon }} />
            </View>
          )}
          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* Title */}
            <Text style={styles.title}>
              {item.communityView.community.title}
            </Text>
            {/* Name */}
            <Text style={styles.name}>{item.communityView.community.name}</Text>
            {/* Description */}
            <Text style={styles.description}>
              {item.communityView.community.description}
            </Text>
          </View>
        </View>
      </TouchableRipple>
      {/* Sub/UnSubscribe */}
      <IconButton
        style={styles.subscribeIconBtn}
        onPress={onSubscribePress}
        icon={() => (
          <IconMaterial
            name={MaterialIconNames.PlusCircleOutline}
            color={theme.colors.primary}
            size={24}
            style={styles.subscribeIcon}
          />
        )}
      />
    </View>
  );
};

const createStyleSheet = (theme: MD3Theme) => {
  return StyleSheet.create({
    communityIcon: {
      width: 30,
      height: 30,
      backgroundColor: '#CCCCCC',
      marginRight: 10,
    },
    container: {
      padding: 20,
      flexDirection: 'row',
    },
    description: {
      paddingRight: 45,
    },
    detailsContainer: {
      //   paddingTop: 8,
    },
    image: {
      width: 100,
      height: 100,
    },
    imageContainer: {
      paddingRight: 12,
    },
    outerContainer: {
      // backgroundColor: 'yellow',
    },
    subscribeIcon: {
      color: theme.colors.primary,
    },
    subscribeIconBtn: {
      position: 'absolute',
      right: 12,
      top: 12,
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    name: {
      color: theme.colors.secondary,
      paddingBottom: 8,
    },
  });
};
