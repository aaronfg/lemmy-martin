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
import { MaterialIconNames, UnicodeText } from '../types';
import { LemmyUtils } from '../utils/LemmyUtils';
import { TextMarkdown } from './TextMarkdown';

/** Props for the {@link ListItemCommunity} component */
export interface IListItemCommunityProps {
  /** Info about the Community to render */
  item: ICommunityListItem;
}

/**
 * Lit item for Communities in a list.
 * @param props The {@link IListItemCommunityProps} instance to render
 * @returns
 */
export const ListItemCommunity = (
  props: IListItemCommunityProps,
): JSX.Element => {
  const { item } = props;
  const theme = useTheme();
  const styles = createStyleSheet(theme);

  const onPress = (event: GestureResponderEvent) => {
    //
  };

  const onSubscribePress = () => {
    //
  };

  const iconName =
    item.communityView.subscribed === 'Subscribed'
      ? MaterialIconNames.CheckCircleOutline
      : MaterialIconNames.PlusCircleOutline;

  const iconColor =
    item.communityView.subscribed === 'Subscribed'
      ? theme.colors.primary
      : theme.colors.onSurface;

  const communityInstance = LemmyUtils.createILemmyInstance(
    item.communityView.community.actor_id,
  );

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
              !{item.communityView.community.name}@{communityInstance.name}{' '}
              <Text style={styles.name}>
                {UnicodeText.Bullet}{' '}
                {item.communityView.counts.subscribers.toLocaleString()}{' '}
                Subscribers
              </Text>
            </Text>
            {/* Description */}
            <View style={styles.description}>
              <TextMarkdown theme={theme}>{item.shortDescription}</TextMarkdown>
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
      marginTop: 6,
      backgroundColor: '#CCCCCC',
    },
    communityIconContainer: {
      width: 30,
      height: 30,
      marginRight: 12,
    },
    container: {
      padding: 12,
      paddingTop: 14,
      paddingRight: 120,
      flexDirection: 'row',
      flex: 1,
    },
    description: {
      flexWrap: 'wrap',
      paddingRight: 8,
    },
    detailsContainer: {},
    image: {
      width: 100,
      height: 100,
    },
    outerContainer: {},
    subscribeIcon: {},
    subscribeIconBtn: {
      position: 'absolute',
      right: 12,
      top: 7,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    name: {
      color: theme.colors.secondary,
    },
  });
};
