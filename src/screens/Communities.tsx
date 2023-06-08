import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Divider, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ErrorMsg } from '../components/ErrorMsg';
import { ListFooterLoading } from '../components/ListFooterLoading';
import { ListItemCommunity } from '../components/ListItemCommunity';
import { CommunityListHeader } from '../components/communities/CommunityListHeader';
import { communitiesPageUpdated } from '../features/communities/actions';
import { communityApi } from '../features/communities/api';
import {
  getCommunitesListPage,
  getCommunityListItems,
} from '../features/communities/selectors';
import { ICommunityListItem } from '../features/communities/types';
import {
  getLemmyAPIError,
  getLemmyAPILoading,
  getLemmyJWT,
} from '../features/lemmy/selectors';
import { getSettingsFeedSource } from '../features/settings/selectors';
import { log } from '../logging/log';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

/**
 * Screen for the a list of Communities either local or across all federated instances.
 */
export const CommunitiesScreen = (): JSX.Element => {
  // const [loading, setLoading] = useState(false);
  const feedSource = useAppSelector(getSettingsFeedSource);
  const loading = useAppSelector(getLemmyAPILoading);
  const token = useAppSelector(getLemmyJWT);
  const error = useAppSelector(getLemmyAPIError);
  const communities = useAppSelector(getCommunityListItems);
  const listPage = useAppSelector(getCommunitesListPage);

  const dispatch = useAppDispatch();

  const styles = createStyleSheet();
  // dispatch(communityApi.endpoints.getCommunities.initiate());
  useEffect(() => {
    if (communities.length === 0)
      dispatch(
        communityApi.endpoints.getCommunities.initiate({ page: listPage }),
      );
  }, []);

  const onPostsPress = async () => {
    try {
      //
      // const response =
    } catch (error) {
      //
    }
  };

  const renderItem = (item: ListRenderItemInfo<ICommunityListItem>) => {
    return <ListItemCommunity item={item.item} />;
    // return <Text>ite</Text>;
  };

  const onListEndReached = (info: { distanceFromEnd: number }) => {
    //
    log.debug(`currentPage: ${listPage} + next page: ${listPage + 1}`);
    dispatch(communitiesPageUpdated(listPage + 1));
  };

  return (
    <SafeAreaView style={styles.safe}>
      {error && <ErrorMsg message={error.message} />}

      <FlatList
        style={styles.list}
        data={communities}
        onEndReachedThreshold={0.5}
        onEndReached={onListEndReached}
        refreshing={loading}
        ListEmptyComponent={
          () => (
            // loading ? (
            <View style={styles.loadingContainer}>
              <Text>Loading Communities...</Text>
              <ActivityIndicator />
            </View>
          )
          // ) : (
          //   <View />
          // )
        }
        renderItem={renderItem}
        ListHeaderComponent={() => <CommunityListHeader />}
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
      // backgroundColor: 'green',
    },
  });
};
