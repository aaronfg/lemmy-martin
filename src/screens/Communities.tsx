import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { ListFooterLoading } from '../components/ListFooterLoading';
import { ListItemCommunity } from '../components/ListItemCommunity';
import { communitiesPageUpdated } from '../features/communities/actions';
import {
  getCommunitesListPage,
  getCommunityListItems,
} from '../features/communities/selectors';
import { ICommunityListItem } from '../features/communities/types';
import { useGetCommunitiesQuery } from '../features/lemmy/api';
import { getLemmyAPIError } from '../features/lemmy/selectors';
import {
  getSettingsCurrentAccountToken,
  getSettingsFeedSource,
} from '../features/settings/selectors';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the a list of Communities either local or across all federated instances.
 */
export const CommunitiesScreen = (): JSX.Element => {
  // selectors
  const feedSource = useAppSelector(getSettingsFeedSource);
  const authToken = useAppSelector(getSettingsCurrentAccountToken);
  const error = useAppSelector(getLemmyAPIError);
  const communities = useAppSelector(getCommunityListItems);
  const listPage = useAppSelector(getCommunitesListPage);

  // hooks
  const dispatch = useAppDispatch();

  const styles = createStyleSheet();

  // Load the communities
  const { isLoading } = useGetCommunitiesQuery({
    page: listPage,
    auth: authToken,
    sort: 'Active',
  });

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  const renderItem = useCallback(
    (item: ListRenderItemInfo<ICommunityListItem>) => {
      return <ListItemCommunity item={item.item} />;
    },
    [],
  );

  const onListEndReached = (info: { distanceFromEnd: number }) => {
    log.debug('onListEndReached(). dispatching communitiesPageUpdated()');
    dispatch(communitiesPageUpdated(listPage + 1));
  };

  return (
    <SafeAreaView style={styles.safe}>
      {error && <ErrorMsg error={error} />}

      <FlatList
        style={styles.list}
        data={communities}
        onEndReachedThreshold={0.2}
        onEndReached={onListEndReached}
        refreshing={isLoading}
        ListEmptyComponent={() => (
          // loading ? (
          <View style={styles.loadingContainer}>
            <Text>Loading Communities...</Text>
            <ActivityIndicator />
          </View>
        )}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={() => <ListFooterLoading />}
      />
    </SafeAreaView>
  );
};

const createStyleSheet = () => {
  return StyleSheet.create({
    list: {
      flex: 1,
    },
    loadingContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    safe: {
      flex: 1,
    },
  });
};
