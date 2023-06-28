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
import {
  settingsFeedSortUpdated,
  settingsFeedTypeUpdated,
} from '../../features/settings/actions';
import {
  getSettingsCurrentAccount,
  getSettingsFeedSortType,
  getSettingsFeedType,
} from '../../features/settings/selectors';
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
  const sortType = useAppSelector(getSettingsFeedSortType);
  const feedType = useAppSelector(getSettingsFeedType);
  // hooks
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const styles = createStyleSheet(theme);

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
      dispatch(settingsFeedTypeUpdated(type));
    }
    onMenuTypeDismiss();
  };

  // const onTypeAllPress = () => {
  //   if (feedType !== 'All'){
  //     dispatch(settingsFeedTypeUpdated('All'));
  //   }
  //   onMenuTypeDismiss();
  // };
  // const onTypeLocalPress = () => {
  //   dispatch(settingsFeedTypeUpdated('Local'));
  //   onMenuTypeDismiss();
  // };
  // const onTypeSubscribedPress = () => {
  //   dispatch(settingsFeedTypeUpdated('Subscribed'));
  //   onMenuTypeDismiss();
  // };

  const onSortTypePress = (sort: SortTypeValue) => {
    console.log('sort: ' + sort);
    dispatch(settingsFeedSortUpdated(sort));
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
              <Text style={styles.title}>{feedType}</Text>
            </TouchableHighlight>
          }>
          <Menu.Item
            key={nanoid()}
            onPress={() => onFeedTypePress('All')}
            titleStyle={feedType === 'All' ? styles.currentFeedType : undefined}
            title="All"
          />
          <Menu.Item
            key={nanoid()}
            onPress={() => onFeedTypePress('Local')}
            titleStyle={
              feedType === 'Local' ? styles.currentFeedType : undefined
            }
            title="Local"
          />
          {currentAccount && (
            <Menu.Item
              key={nanoid()}
              onPress={() => onFeedTypePress('Subscribed')}
              titleStyle={
                feedType === 'Subscribed' ? styles.currentFeedType : undefined
              }
              title="Subscribed"
            />
          )}
        </Menu>
        {/* Sort Type */}
        <Menu
          visible={showMenuSort}
          onDismiss={onMenuSortDismiss}
          anchor={
            <TouchableHighlight onPress={onSortPress}>
              <Button icon="sort-variant">{sortType}</Button>
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
      padding: 16,
      alignItems: 'center',
    },
    currentFeedType: {
      color: theme.colors.primary,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    sortType: {
      fontSize: 16,
      marginLeft: 12,
      color: theme.colors.secondary,
    },
  });
};
