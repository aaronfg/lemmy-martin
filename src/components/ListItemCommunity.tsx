import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { GestureResponderEvent, Image, StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-package';
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
import { MaterialIconNames, UnicodeText } from '../types';

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

  // const iconName = item.communityView.subscribed
  //   ? MaterialIconNames.CheckCircleOutline
  //   : MaterialIconNames.PlusCircleOutline;

  log.debug('Lemmy? ' + item.communityView.community.name === 'lemmy');

  const iconName =
    item.communityView.community.name === 'lemmy'
      ? MaterialIconNames.CheckCircleOutline
      : MaterialIconNames.PlusCircleOutline;

  // const iconColor = item.communityView.subscribed
  //   ? theme.colors.primary
  //   : theme.colors.onSurface;

  const iconColor =
    iconName === MaterialIconNames.CheckCircleOutline
      ? theme.colors.primary
      : theme.colors.onSurface;

  return (
    <View style={styles.outerContainer}>
      <TouchableRipple onPress={onPress}>
        <View key={nanoid()} style={styles.container}>
          {/* Icon */}
          {item.communityView.community.icon ? (
            <Image
              source={{ uri: item.communityView.community.icon }}
              style={styles.communityIcon}
            />
          ) : (
            <View style={styles.communityIconContainer} />
          )}
          {/* Details */}
          <View style={styles.detailsContainer}>
            {/* Title */}
            <Text style={styles.title}>
              {item.communityView.community.title}
            </Text>
            {/* Name */}
            <Text style={styles.name}>
              /c/{item.communityView.community.name}{' '}
              <Text style={styles.name}>
                {UnicodeText.Bullet} {item.communityView.counts.subscribers}{' '}
                Subscribers
              </Text>
            </Text>
            {/* Description */}
            <View style={styles.description}>
              <Markdown
                styles={{
                  text: {
                    color: theme.colors.onSurface,
                  },
                  autolink: {
                    color: theme.colors.primary,
                  },
                  listItemNumber: {
                    color: theme.colors.onSurface,
                  },
                  view: {
                    width: '90%',
                  },
                }}>
                {item.shortDescription}
              </Markdown>
            </View>
          </View>
        </View>
      </TouchableRipple>
      {/* Sub/UnSubscribe */}
      <IconButton
        style={styles.subscribeIconBtn}
        onPress={onSubscribePress}
        icon={() => (
          <IconMaterial
            name={iconName}
            color={iconColor}
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
      marginRight: 12,
      // backgroundColor: '#CCCCCC',
    },
    communityIconContainer: {
      width: 30,
      height: 30,
      marginRight: 12,
      // backgroundColor: 'red',
    },
    container: {
      padding: 12,
      paddingTop: 14,
      flexDirection: 'row',
      flex: 1,
    },
    description: {
      // backgroundColor: 'gray',
      // marginRight: 16,
      // flexShrink: 1,
      // overflow: 'hidden',
      // width: 300,
      flexWrap: 'wrap',
      paddingRight: 8,
    },
    detailsContainer: {
      // marginRight: 12,
      // backgroundColor: 'green',
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
      // color: theme.colors.primary,
    },
    subscribeIconBtn: {
      position: 'absolute',
      right: 12,
      top: 7,
    },
    title: { fontSize: 20, fontWeight: 'bold' },
    name: {
      color: theme.colors.secondary,
      // paddingBottom: 4,
    },
  });
};
