import { nanoid } from '@reduxjs/toolkit';
import { ListingType } from 'lemmy-js-client';
import React, { useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import {
  Button,
  MD3Theme,
  Menu,
  ProgressBar,
  Text,
  useTheme,
} from 'react-native-paper';
import { LemmyApiTagTypes, lemmyApi } from '../../features/lemmy/api';
import { getLemmyAPILoading } from '../../features/lemmy/selectors';
import { SortTypeValue, SortTypeValues } from '../../features/lemmy/types';
import { getSettingsCurrentAccount } from '../../features/settings/selectors';
import {
  userUIFeedListingTypeUpdated,
  userUIFeedSortTypeUpdated,
} from '../../features/user/actions';
import {
  getUserUIFeedSortType,
  getUserUIFeedType,
} from '../../features/user/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

/**
 * Header for the Feed screen
 */
export const FeedListHeader = (): JSX.Element => {
  // local state
  const [showMenuType, setShowMenuType] = useState(false);
  const [showMenuSort, setShowMenuSort] = useState(false);
  // selectors
  const loading = useAppSelector(getLemmyAPILoading);
  const currentAccount = useAppSelector(getSettingsCurrentAccount);
  const sortType = useAppSelector(getUserUIFeedSortType);
  const feedType = useAppSelector(getUserUIFeedType);
  // hooks
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const styles = createStyleSheet(theme);

  const createFeedMenuItem = (fType: ListingType) => {
    return (
      <Menu.Item
        key={nanoid()}
        onPress={() => onFeedTypePress(fType)}
        titleStyle={fType === feedType ? styles.currentFeedType : undefined}
        title={fType}
      />
    );
  };

  const onTypePress = () => {
    setShowMenuType(true);
  };

  const onSortPress = () => {
    setShowMenuSort(true);
  };

  const onMenuTypeDismiss = () => {
    setShowMenuType(false);
  };

  const onMenuSortDismiss = () => {
    setShowMenuSort(false);
  };

  const onFeedTypePress = (type: ListingType) => {
    if (feedType !== type) {
      dispatch(userUIFeedListingTypeUpdated(type));
    }
    onMenuTypeDismiss();
  };

  const onSortTypePress = (sort: SortTypeValue) => {
    dispatch(userUIFeedSortTypeUpdated(sort));
    dispatch(lemmyApi.util.invalidateTags([LemmyApiTagTypes.Posts]));
    onMenuSortDismiss();
  };

  return (
    <View>
      <View style={styles.container}>
        <Menu
          visible={showMenuType}
          onDismiss={onMenuTypeDismiss}
          anchor={
            <TouchableHighlight onPress={onTypePress}>
              <Button icon="adjust" labelStyle={styles.feedType}>
                {feedType}
              </Button>
            </TouchableHighlight>
          }>
          {createFeedMenuItem('All')}
          {createFeedMenuItem('Local')}
          {currentAccount && createFeedMenuItem('Subscribed')}
        </Menu>
        {/* Sort Type */}
        <Menu
          visible={showMenuSort}
          onDismiss={onMenuSortDismiss}
          anchor={
            <TouchableHighlight onPress={onSortPress}>
              <View style={styles.sortContainer}>
                <Text style={styles.sortText}>Sort: </Text>
                <Button labelStyle={styles.sortType}>{sortType}</Button>
              </View>
            </TouchableHighlight>
          }>
          {SortTypeValues.map(val => (
            <Menu.Item
              key={nanoid()}
              onPress={() => onSortTypePress(val)}
              title={val}
            />
          ))}
        </Menu>
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
      paddingVertical: 11,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    currentFeedType: {
      color: theme.colors.primary,
    },
    feedType: {
      fontSize: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    sortContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    sortText: {
      fontSize: 16,
      marginBottom: 2,
    },
    sortType: {
      fontSize: 18,
    },
  });
};
